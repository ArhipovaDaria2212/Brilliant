package brilliant.DAO;

import brilliant.DAO.repository.CourseRepository;
import brilliant.models.Course;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CourseDAO {
    private final CourseRepository courseRepository;

    public CourseDAO(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public void saveCourse(Course course) {
        courseRepository.save(course);
    }

    public List<Course> getCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourse(Long id) {
        return courseRepository.findById(id);
    }

    public Optional<Course> getCourse(String title) {
        return courseRepository.findByTitle(title);
    }
}
