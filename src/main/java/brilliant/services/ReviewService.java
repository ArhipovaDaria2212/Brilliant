package brilliant.services;

import brilliant.DAO.ReviewDAO;
import brilliant.DTO.ReviewDTO;
import brilliant.models.Category;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ReviewService {
    @Autowired
    private ReviewDAO reviewDAO;

    @Transactional
    public Page<ReviewDTO> getReviewsWithPagination(Pageable pageable) {
        return reviewDAO.getReviewsWithPagination(pageable).map(ReviewDTO::from);
    }

    @Transactional
    public Page<ReviewDTO> getReviewsWithPagination(String category, Pageable pageable) {
        return reviewDAO
                .getReviewsByCategoryWithPagination(Category.valueOf(category).ordinal(), pageable)
                .map(ReviewDTO::from);
    }
}
