package brilliant.services;

import brilliant.DAO.CourseDAO;
import brilliant.DTO.CourseDTO;
import brilliant.models.Course;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseDAO courseDAO;

    public CourseService(CourseDAO courseDAO) {
        this.courseDAO = courseDAO;
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
