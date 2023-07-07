import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantReviews } from "../../store/reviews";
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./reviews.css"
import moment from 'moment';
import DeleteReviewButton from "./review_remove";
import UpdateReviewButton from "./update-review";

function Reviews({ restaurant }) {
    const dispatch = useDispatch();
    // const { reviewId } = useParams()
    const reviews = useSelector((state) => Object.values(state.reviews));
  const user = useSelector((state) => state.session.user);
  
    


    useEffect(() => {
        if (restaurant) {
            dispatch(getRestaurantReviews(restaurant.id));
        }
    }, [dispatch, restaurant]);
  
    const getTimeElapsed = (createdAt) => {
        const currentTime = moment();
        const createdTime = moment(createdAt);
        const daysElapsed = currentTime.diff(createdTime, "days");
        const hoursElapsed = currentTime.diff(createdTime, "hours");
        if (daysElapsed < 1) {
          return `${hoursElapsed} Hour${hoursElapsed > 1 ? "s" : ""} ago`;
        } else {
          return `${daysElapsed} Day${daysElapsed > 1 ? "s" : ""} ago`;
        }
      };
      
  const reviewCount = reviews.length;
  const reviewStatement = reviewCount === 1 ? `What ${reviewCount} person is saying` : `What ${reviewCount} people are saying`;


    return (
        <div className="review-list">
        <h3>{reviewStatement}</h3>
    {reviews.length === 0 ? (
      <div>No reviews found for this restaurant.</div>
    ) : 
            reviews.map((review) => (
            <div key={review.id} className="review-container">
                <div className="reviewer-info">
                <div className="reviewer-circle">{review.reviewer_firstname[0].toUpperCase()} </div>
                  <div className="reviewer-email"> {review.reviewer_firstname.split('@')[0]}</div>
                </div>
                <div className="review-details">
                <div className="review-date">
                Review Left {getTimeElapsed(review.created_at)} Ago
                </div>
                    <div className="review-stats">
                        <div className="review-food">
                            <div className="review-cat">Food  • &nbsp; </div><div className="numberstat">{review.food}</div>
                        </div>
                        <div className="review-service">
                            <div className="review-cat">Service  •  &nbsp; </div><div className="numberstat">{review.service}</div>
                        </div>
                        <div className="review-ambience ">
                            <div className="review-cat">Ambience  • &nbsp; </div><div className="numberstat">{review.ambience}</div>
                        </div>
                        <div className="review-value ">
                            <div className="review-cat">Value  • &nbsp; </div><div className="numberstat">{review.value}</div>
                        </div>
                        <div className="review-overall ">
                            <div className="review-cat">Overall  • &nbsp; </div><div className="numberstat">{review.overall}</div>
                        </div>
                    </div>
                        <div className="review-body">{review.body}</div>
                        <div></div>
                        {user && review.reviewer_firstname === user.email && (
  <div className="review-crud">
      <DeleteReviewButton reviewId={review.id} />
      <UpdateReviewButton review={review} />
  </div>
)}
                </div>
            </div>
            ))}
        </div>
    );      

    // return (
    //   <div className="review-list">
    //     <h3>Reviews:</h3>
    //     {reviews &&
    //       reviews.map((review) => (
    //         <div key={review.id}>
    //           <div>{review.id} - {review.user_id} - {review.nickname} - {review.body} - {review.food} - {review.service} - {review.value} - {review.overall}</div>
    //         </div>
    //       ))}
    //   </div>
    // );
  }

export default Reviews;
