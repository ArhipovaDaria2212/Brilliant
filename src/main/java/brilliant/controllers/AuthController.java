package brilliant.controllers;

import brilliant.DAO.repository.ConfirmationTokenRepository;
import brilliant.exception.UserAlreadyExistsException;
import brilliant.models.User;
import brilliant.request.LoginRequest;
import brilliant.response.JwtResponse;
import brilliant.security.jwt.JwtUtils;
import brilliant.security.user.UserDetailsImpl;
import brilliant.services.EmailService;
import brilliant.services.IUserService;
import brilliant.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    static final Logger log =
            LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        try {
            userService.registerUser(user);
            String confirmationToken = UUID.randomUUID().toString();
            userService.saveConfirmationToken(user, confirmationToken);
            emailService.sendConfirmationEmail(user.getEmail(), confirmationToken);
            return ResponseEntity.ok("Пожалуйста, проверьте вашу почту для завершения регистрации.");
        } catch (UserAlreadyExistsException e ) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }

    }

    @GetMapping("/confirm")
    public ResponseEntity<?> confirmRegistration(@RequestParam("token") String token) {
        // Проверяем токен и завершаем регистрацию пользователя
        if (userService.confirmRegistration(token)) {
            String redirectUrl = "http://localhost:3000/login";
            HttpHeaders headers = new HttpHeaders();
            headers.add("Location", redirectUrl);
            return new ResponseEntity<String>(headers, HttpStatus.FOUND);
        } else {
            return ResponseEntity.badRequest().body("Неверный токен подтверждения.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request){
        if (!userService.getUser(request.getEmail()).getConfirmed())
            return ResponseEntity.notFound().build();

        Authentication authentication =
                authenticationManager
                        .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtTokenForUser(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority).toList();
        return ResponseEntity.ok(new JwtResponse(
                userDetails.getId(),
                userDetails.getEmail(),
                jwt,
                roles));
    }
}
