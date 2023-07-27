import { useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// import { getUserReviews, clearRestaurantReviews } from "../../store/reviews";
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "./reviews.css"
import moment from 'moment';
import DeleteReservationButton from "./reservation_remove";
import UpdateReservationButton from "./update-reservation";
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
    const createdTime = moment(createdAt);
    return createdTime.format("MMMM D, YYYY");
  };

  const getTimeWithoutDate = (timeString) => {
    const time = moment(timeString).format("h:mm A");
    return time;
  };
  
  
  
    // const getTimeElapsed = (createdAt) => {
    //     const currentTime = moment();
    //     const createdTime = moment(createdAt);
    //     const daysElapsed = currentTime.diff(createdTime, "days");
    //     const hoursElapsed = currentTime.diff(createdTime, "hours");
    //     if (daysElapsed < 1) {
    //       return `${hoursElapsed} Hour${hoursElapsed > 1 ? "s" : ""} ago`;
    //     } else {
    //       return `${daysElapsed} Day${daysElapsed > 1 ? "s" : ""} ago`;
    //     }
    //   };
      
  const reservationCount = reservations.length;
  const reservationStatement = reservationCount === 1 ? `${capitalizedPrefix} has ${reservationCount} Reservation` : `${capitalizedPrefix} has ${reservationCount} Reservations`;

  const getRandomColor = () => {
    const colors = [
        "#330000", // Dark Maroon
  "#660000", // Maroon
  "#990000", // Crimson Red
  "#CC0000", // Red
  "#FF0000", // Pure Red
  "#CC3333", // Persian Red
  "#FF3333", // Light Persian Red
  "#CC6666", // Fuzzy Wuzzy
  "#FF6666", // Light Fuzzy Wuzzy
  "#CC9999", // Dust Storm
  "#FF9999", // Light Dust Storm
  "#CC0033", // Scarlet
  "#FF0033", // Light Scarlet
  "#CC3366", // Dark Ruby
  "#FF3366", // Ruby
  "#CC6699", // French Rose
  "#FF6699", // Light French Rose
  "#CC99CC", // Thistle
  "#FF99CC", // Light Thistle
  "#CC0066", // Rosewood
  "#FF0066", // Light Rosewood
  "#CC3399", // Fuchsia Pink
  "#FF3399", // Light Fuchsia Pink
  "#CC66CC", // Medium Lavender Magenta
  "#FF66CC", // Light Medium Lavender Magenta
  "#CC99FF", // Bright Lavender
  "#FF99FF", // Light Bright Lavender
  "#CC0099", // Purple Pizzazz
  "#FF0099", // Light Purple Pizzazz
  "#CC33CC", // Medium Orchid
  "#FF33CC", // Light Medium Orchid
  "#CC66FF", // Orchid
  "#FF66FF", // Light Orchid
  "#CC00CC", // Heliotrope
  "#FF00CC", // Light Heliotrope
  "#CC33FF", // Electric Violet
  "#FF33FF", // Light Electric Violet
  "#CC00FF", // Fuchsia
  "#FF00FF", // Light Fuchsia
  "#CC66FF", // Bright Lavender
  "#FF66FF", // Light Bright Lavender
  "#CC99FF", // Bright Lilac
  "#FF99FF", // Light Bright Lilac
    ]; // Add more colors as needed

    // Get a random index within the current length of the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Extract the color at the random index from the colors array
    const randomColor = colors[randomIndex];

    // Remove the selected color from the colors array to avoid repetition
    colors.splice(randomIndex, 1);

    return randomColor;
  };

    return (
        <div className="review-list">
        <h3 className="user-rev-st">{reservationStatement}</h3>
    {reservations.length === 0 ? (
      <div>No reservations found for this user.</div>
    ) : 
            reservations.map((reservation) => (
            <div key={reservation.id} className="review-container">
                <div className="reviewer-info">
                <div className="reviewer-circle" style={{ backgroundColor: getRandomColor() }}>{reservation.firstName[0].toUpperCase()} </div>
                  <div className="reviewer-email"> {reservation.firstName}</div>
                </div>
                <div className="review-details">
                        <div className="review-rest-name">{reservation.rname}</div>
                <div className="review-date">
                Reserved On {getTimeElapsed(reservation.created_at)} at {getTimeWithoutDate(reservation.time)} 
                </div>
                    <div className="review-stats">
                        <div className="review-food">
                            <div className="review-cat">Party Size  • &nbsp; </div><div className="numberstat">{reservation.partySize}</div>
                        </div>
                        <div className="review-service">
                            {/* <div className="review-cat">Service  •  &nbsp; </div><div className="numberstat">{reservation.party_size}</div> */}
                        </div>
                        <div className="review-ambience ">
                            {/* <div className="review-cat">Ambiance  • &nbsp; </div><div className="numberstat">{reservation.phone_number}</div> */}
                        </div>
                        <div className="review-value ">
                            {/* <div className="review-cat">Value  • &nbsp; </div><div className="numberstat">{reservation.special_request}</div> */}
                        </div>
                        <div className="review-overall ">
                            {/* <div className="review-cat">Overall  • &nbsp; </div><div className="numberstat">{review.overall}</div> */}
                        </div>
                    </div>
                    <div
              className={`reservation-body ${
                !reservation.specialRequest ? "disabled" : ""
              }`}
            ><div className="s-r">Special Requests:</div>{" "}
            {reservation.specialRequest || "N/A"}</div>
                        <div>
                          <UpdateReservationButton reservation={reservation}/>
                          <DeleteReservationButton reservationId={reservation.id}/>
                        </div>
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
