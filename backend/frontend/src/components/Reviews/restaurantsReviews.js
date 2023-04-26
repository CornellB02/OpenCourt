import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantReviews } from "../../store/reviews";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./reviews.css"
import moment from 'moment';

function Reviews({ restaurant }) {
    const dispatch = useDispatch();
    const { reviewId } = useParams()
    const reviews = useSelector((state) => Object.values(state.reviews));
  
    


    useEffect(() => {
        if (restaurant) {
            dispatch(getRestaurantReviews(restaurant));
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
      

    return (
        <div className="review-list">
        <h3>Reviews:</h3>
        {reviews &&
            reviews.map((review) => (
            <div key={review.id} className="review-container">
                <div className="reviewer-info">
                <div className="review-area">
                            <div className="area"></div><div className="numberstat">{restaurant.neighborhood}</div>
                        </div>
                </div>
                <div className="review-date">
                Review Left {getTimeElapsed(review.created_at)} Ago
                </div>
                <div className="review-header">
                {/* <span className="review-nickname">{review.nickname}</span> */}
                </div>
                <div className="review-details">
                    <div className="review-stats">
                        <div className="review-food">
                            <div className="review-cat">Food - &nbsp; </div><div className="numberstat">{review.food}</div>
                        </div>
                        <div className="review-service">
                            <div className="review-cat">Service - &nbsp; </div><div className="numberstat">{review.service}</div>
                        </div>
                        <div className="review-ambience ">
                            <div className="review-cat">Ambience - &nbsp; </div><div className="numberstat">{review.ambience}</div>
                        </div>
                        <div className="review-value ">
                            <div className="review-cat">Value - &nbsp; </div><div className="numberstat">{review.value}</div>
                        </div>
                        <div className="review-overall ">
                            <div className="review-cat">Overall - &nbsp; </div><div className="numberstat">{review.overall}</div>
                        </div>
                    </div>
                        <div className="review-body">{review.body}</div>
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
