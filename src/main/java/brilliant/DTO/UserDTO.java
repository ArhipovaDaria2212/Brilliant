//package brilliant.DTO;
//
//import brilliant.models.Course;
//import brilliant.models.User;
//import lombok.Data;
//
//@Data
//public class UserDTO {
//    private String name;
//    private String surname;
//    private String email;
//    private String phone;
//    private String password;
//    private String role;
//
//    public static UserDTO from(User user) {
//        UserDTO userDTO = new UserDTO();
//        userDTO.setName(user.getUsername());
////        userDTO.setSurname(user.getSurname());
////        userDTO.setEmail(user.getEmail());
////        userDTO.setPhone(user.getPhone());
//        userDTO.setPassword(user.getPassword());
////        userDTO.setRole(user.getRole());
//
//        return userDTO;
//    }
//
//    public User toUser() {
//        User user = new User();
//        user.setUsername(this.name);
////        user.setSurname(this.surname);
////        user.setEmail(this.email);
////        user.setPhone(this.phone);
//        user.setPassword(this.password);
////        user.setRole(this.role);
//
//        return user;
//    }
//}
