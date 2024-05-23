package brilliant.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "modules")
public class Module {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description", columnDefinition="text")
    private String description;

    @Column(name = "progress")
    private int progress;

    @Column(name = "lessons")
    private int lessons;

    @ManyToOne
    private Course course;
}
