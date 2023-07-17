import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getUserReviews, clearRestaurantReviews } from "../../store/reviews";
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./reviews.css"
import moment from 'moment';
import DeleteReviewButton from "./review_remove";
import UpdateReviewButton from "./update-review";

function UserReviews({ user }) {
    const dispatch = useDispatch();
    // const { reviewId } = useParams()
    const reviews = useSelector((state) => Object.values(state.reviews).reverse());
//   const user = useSelector((state) => state.session.user);
const restaurants = useSelector((state) => state.restaurants); // Assuming you have the restaurants data in Redux state

const emailParts = user.email.split("@");
const emailPrefix = emailParts[0];

// Capitalize the first letter of the email prefix
const capitalizedPrefix = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);

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

  useEffect(() => {
    if (user) {
      dispatch(getUserReviews(user.id));
    }

    return () => {
        dispatch(clearRestaurantReviews());
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
      
  const reviewCount = reviews.length;
  const reviewStatement = reviewCount === 1 ? `${capitalizedPrefix} has ${reviewCount} Review` : `${capitalizedPrefix} has ${reviewCount} Reviews`;


    return (
        <div className="review-list">
        <h3 className="user-rev-st">{reviewStatement}</h3>
    {reviews.length === 0 ? (
      <div>No reviews found for this user.</div>
    ) : 
            reviews.map((review) => (
            <div key={review.id} className="review-container">
                <div className="reviewer-info">
                <div className="reviewer-circle"  style={{ backgroundColor: getRandomColor() }}>{review.reviewer_firstname[0].toUpperCase()} </div>
                  <div className="reviewer-email"> {review.reviewer_firstname.split('@')[0]}</div>
                </div>
                <div className="review-details">
                        <div className="review-rest-name">{review.restaurant_name}</div>
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
                        {/* <div></div> */}
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

export default UserReviews;
