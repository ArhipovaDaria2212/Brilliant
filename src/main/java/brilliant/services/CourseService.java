package brilliant.services;

import brilliant.DAO.CourseDAO;
import brilliant.DAO.repository.UserRepository;
import brilliant.DTO.CourseDTO;
import brilliant.models.Course;
import brilliant.models.User;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseDAO courseDAO;
    private final UserRepository userRepository;

    public CourseService(CourseDAO courseDAO, UserRepository userRepository) {
        this.courseDAO = courseDAO;
        this.userRepository = userRepository;
    }

    @Transactional
    public void addCourse(CourseDTO courseDTO) {
        courseDAO.saveCourse(courseDTO.toCourse());
    }

    @Transactional
    public CourseDTO getCourseById(Long id) {
        Course course = courseDAO.getCourse(id).orElseThrow();
        return CourseDTO.from(course);
    }

    @Transactional
    public List<Course> getCourses() {
        return courseDAO.getCourses();
    }
}
