package brilliant.DTO;

import brilliant.models.CourseLevel;
import lombok.Data;
import brilliant.models.Course;

@Data
public class CourseDTO {
    private String title;
    private String description;
    private String icon;
    private int time;
    private String level;


    public static CourseDTO from(Course course) {
        CourseDTO courseDTO = new CourseDTO();
        courseDTO.setTitle(course.getTitle());
        courseDTO.setDescription(course.getDescription());
        courseDTO.setIcon(course.getIcon());
        courseDTO.setTime(course.getTime());
        courseDTO.setLevel(course.getLevel().name());

        return courseDTO;
    }

    public Course toCourse() {
        Course course = new Course();
        course.setTitle(this.title);
        course.setDescription(this.description);
        course.setIcon(this.icon);
        course.setTime(this.time);
        course.setLevel(CourseLevel.valueOf(level));

        return course;
    }
}
