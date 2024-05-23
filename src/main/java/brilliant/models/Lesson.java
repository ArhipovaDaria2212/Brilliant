package brilliant.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "lessons")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "resource", length = 511)
    private String resource;

    @ManyToOne
    private Module module;
}
