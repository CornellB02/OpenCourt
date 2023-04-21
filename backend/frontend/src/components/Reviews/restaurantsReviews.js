import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantReviews } from "../../store/reviews";

function Reviews({ restaurant }) {
  const dispatch = useDispatch();
  const { reviewId } = useParams()
  const reviews = useSelector((state) => Object.values(state.reviews));

  useEffect(() => {
    dispatch(getRestaurantReviews(restaurant));
  }, [dispatch, restaurant]);

  return (
    <div className="review-list">
      <h3>Reviews:</h3>
      {reviews &&
        reviews.map((review) => (
          <div key={review.id}>
            <div>{review.id} - {review.user_id} - {review.nickname} - {review.body} - {review.food} - {review.service} - {review.value} - {review.overall}</div>
          </div>
        ))}
    </div>
  );
}

export default Reviews;
