package brilliant.DAO;

import brilliant.DAO.repository.ReviewRepository;
import brilliant.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ReviewDAO {
    @Autowired
    private ReviewRepository reviewRepository;

    public Page<Review> getReviewsWithPagination(Pageable pageable) {
        return reviewRepository.findAll(pageable);
    }

    public Page<Review> getReviewsByCategoryWithPagination(int categoryId, Pageable pageable) {
        return reviewRepository.findAllByCategoryId(categoryId, pageable);
    }
}
