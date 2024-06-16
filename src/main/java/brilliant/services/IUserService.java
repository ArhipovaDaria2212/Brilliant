package brilliant.services;

import brilliant.models.User;

import java.util.List;

public interface IUserService {
    User registerUser(User user);
    List<User> getUsers();
    void deleteUser(String email);
    User getUser(String email);
    void saveConfirmationToken(User user, String token);
    boolean confirmRegistration(String token);
}
