package brilliant.services;

import brilliant.DAO.repository.ConfirmationTokenRepository;
import brilliant.exception.UserAlreadyExistsException;
import brilliant.models.ConfirmationToken;
import brilliant.models.Role;
import brilliant.models.User;
import brilliant.DAO.repository.RoleRepository;
import brilliant.DAO.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;

    @Override
    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())){
            throw new UserAlreadyExistsException(user.getEmail() + " already exists");
        }
        user.setAvatar("https://firebasestorage.googleapis.com/v0/b/brilliant-8cb1c.appspot.com/o/avatars%2F1.png?alt=media&token=b684b33e-8c4f-4a9e-9243-3e241001596f");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role userRole = roleRepository.findByName("ROLE_USER").get();
        user.setRoles(Collections.singletonList(userRole));
        user.setConfirmed(false);
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    @Override
    public void deleteUser(String email) {
        User theUser = getUser(email);
        if (theUser != null){
            userRepository.deleteByEmail(email);
        }

    }

    @Override
    public User getUser(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public void saveConfirmationToken(User user, String token) {
        ConfirmationToken confirmationToken = new ConfirmationToken();
        confirmationToken.setUser(user);
        confirmationToken.setToken(token);
        confirmationTokenRepository.save(confirmationToken);
    }

    @Override
    public boolean confirmRegistration(String token) {
        ConfirmationToken confirmationToken = confirmationTokenRepository.findByToken(token);
        if (confirmationToken != null) {
            // Логика подтверждения регистрации
            Long userId = confirmationToken.getUser().getId();
            User user = userRepository.findById(userId).orElse(null);
            if (user != null) {
                user.setConfirmed(true);
                userRepository.save(user);
                return true;
            }
        }
        return false;
    }
}
