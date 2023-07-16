import { useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// import { getUserReviews, clearRestaurantReviews } from "../../store/reviews";
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "./reviews.css"
import moment from 'moment';
// import DeleteReviewButton from "./review_remove";
// import UpdateReviewButton from "./update-review";
import { getUserReservs, clearUserReservs } from "../../store/reservs";

function UserReservs({  }) {
    const dispatch = useDispatch();
//   const location = useLocation();
    // const { reviewId } = useParams()
    // const reservations = location.state?.reservation
    const reservations = useSelector((state) => Object.values(state.reservs).reverse());
  const user = useSelector((state) => state.session.user);
// const restaurants = useSelector((state) => state.restaurants); // Assuming you have the restaurants data in Redux state

const emailParts = user.email.split("@");
const emailPrefix = emailParts[0];

// Capitalize the first letter of the email prefix
const capitalizedPrefix = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);


  useEffect(() => {
    if (user) {
      dispatch(getUserReservs(user.id));
    }

    return () => {
        dispatch(clearUserReservs());
      };
  }, [dispatch, user]);

  
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
      
  const reservationCount = reservations.length;
  const reservationStatement = reservationCount === 1 ? `${capitalizedPrefix} has ${reservationCount} Reservation` : `${capitalizedPrefix} has ${reservationCount} Reservations`;


    return (
        <div className="review-list">
        <h3 className="user-rev-st">{reservationStatement}</h3>
    {reservations.length === 0 ? (
      <div>No reservations found for this user.</div>
    ) : 
            reservations.map((reservation) => (
            <div key={reservation.id} className="review-container">
                <div className="reviewer-info">
                <div className="reviewer-circle">{reservation.firstName} </div>
                  <div className="reviewer-email"> {reservation.firstName}</div>
                </div>
                <div className="review-details">
                        <div className="review-rest-name">{reservation.rname}</div>
                <div className="review-date">
                Review Left {getTimeElapsed(reservation.created_at)} Ago
                </div>
                    <div className="review-stats">
                        <div className="review-food">
                            <div className="review-cat">Food  • &nbsp; </div><div className="numberstat">{reservation.time}</div>
                        </div>
                        <div className="review-service">
                            <div className="review-cat">Service  •  &nbsp; </div><div className="numberstat">{reservation.party_size}</div>
                        </div>
                        <div className="review-ambience ">
                            <div className="review-cat">Ambiance  • &nbsp; </div><div className="numberstat">{reservation.phone_number}</div>
                        </div>
                        <div className="review-value ">
                            <div className="review-cat">Value  • &nbsp; </div><div className="numberstat">{reservation.special_request}</div>
                        </div>
                        <div className="review-overall ">
                            {/* <div className="review-cat">Overall  • &nbsp; </div><div className="numberstat">{review.overall}</div> */}
                        </div>
                    </div>
                        <div className="review-body">{reservation.body}</div>
                        {/* <div></div> */}
                        {/* {user && reservation.first_name === user.email.split("@") && (
   <div className="review-crud">
      <DeleteReviewButton reviewId={review.id} />
      <UpdateReviewButton review={review} /> 
   </div> 
)} */}
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

export default UserReservs;
