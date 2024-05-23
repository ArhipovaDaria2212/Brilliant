package brilliant.DTO;

import lombok.Data;
import brilliant.models.Course;

@Data
public class CourseDTO {
    private String title;
    private String description;
    private String icon;

    public static CourseDTO from(Course course) {
        CourseDTO courseDTO = new CourseDTO();
        courseDTO.setTitle(course.getTitle());
        courseDTO.setDescription(course.getDescription());
        courseDTO.setIcon(course.getIcon());

        return courseDTO;
    }

    public Course toCourse() {
        Course course = new Course();
        course.setTitle(this.title);
        course.setDescription(this.description);
        course.setIcon(this.icon);

        return course;
    }
}
