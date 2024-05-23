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

    public Course() {
    }

    public Course(String title, String description, String iconSrc) {
        this.title = title;
        this.description = description;
        this.icon = iconSrc;
    }
}
