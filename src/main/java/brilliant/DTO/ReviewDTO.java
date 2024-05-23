package brilliant.DTO;

import brilliant.models.Category;
import brilliant.models.Course;
import brilliant.models.Review;
import lombok.Data;

import java.util.Arrays;

@Data
public class ReviewDTO {

    private String name;
    private int grade;
    private String text;
    private String category;

    public void setCategory(int id) {
        this.category = Category.values()[id].toString();
    }

    public static ReviewDTO from(Review review) {
        ReviewDTO reviewDTO = new ReviewDTO();
        reviewDTO.setName(review.getName());
        reviewDTO.setGrade(review.getGrade());
        reviewDTO.setText(review.getText());
        reviewDTO.setCategory(review.getCategoryId());

        return reviewDTO;
    }
}
