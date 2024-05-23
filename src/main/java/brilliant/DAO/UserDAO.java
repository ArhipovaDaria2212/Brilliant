//package brilliant.DAO;
//
//import brilliant.DAO.repository.UserRepository;
//import brilliant.models.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//import java.util.List;
//import java.util.Optional;
//
//@Component
//public class UserDAO {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    public List<User> getUsers() {
//        return userRepository.findAll();
//    }
//
//    public Optional<User> findById(Long id) {
//        return userRepository.findById(id);
//    }
//
//    public void saveUser(User user) {
//        userRepository.save(user);
//    }
//
//    boolean existsByEmail(String email){
//        return userRepository.existsByEmail(email);
//    }
//
//    void deleteByEmail(String email){
//        userRepository.deleteByEmail(email);
//    }
//
//    public Optional<User> findByEmail(String email){
//        return userRepository.findByEmail(email);
//    }
//
//    public User findByUsername(String username) {
////        StackTraceElement[] stackTraceElements = Thread.currentThread().getStackTrace();
////        for (StackTraceElement element:stackTraceElements) {
////            System.out.println(element.getMethodName());
////        }
//        return userRepository.findByUsername(username);
//    }
//
//}
