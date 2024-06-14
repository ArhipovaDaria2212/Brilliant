package brilliant.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "description", columnDefinition="text")
    private String description;

    @Column(name = "icon", length = 511)
    private String icon;

    @Column(name = "time")
    private int time;

    @Column(name = "level")
    @Enumerated(EnumType.STRING)
    private CourseLevel level;

    public Course() {
    }

    public Course(String title, String description, String iconSrc, int time, CourseLevel level) {
        this.title = title;
        this.description = description;
        this.icon = iconSrc;
        this.time = time;
        this.level = level;
    }
}
