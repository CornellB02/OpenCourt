import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { composeReview } from "../../store/reviews";
import { useHistory } from "react-router-dom";
// import { selectUserId } from "../../store/session";
import { getRestaurant } from "../../store/restaurants";

function ReviewsBox({ restaurant }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [validationErrors, setValidationErrors] = useState([]);
  const user = useSelector((state) => state.session.user);
  const [formData, setFormData] = useState({
    nickname: "",
    body: "",
    food: "",
    service: "",
    ambience: "",
    value: "",
    overall: "",
    reviewer_firstname: user.email,
    // restaurant_id: restaurantId,
  });

  

  // const reviews = useSelector((state) => state.reviews);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // debugger
    // const errors = [];
    const reviewData = {
      ...formData,
      user_id: user.id,
      restaurant_id: restaurant.id,
    };
    // dispatch(getRestaurant(restaurant));
    await dispatch(composeReview(reviewData, restaurant.id )).then(() => {
      setFormData({
        nickname: "",
        body: "",
        food: "",
        service: "",
        ambience: "",
        value: "",
        overall: "",
        // user_id: userId,
        // restaurant_id: restaurantId,
      });
    });
  };

  // const handleDelete = (reviewId) => {
  //   dispatch(removeReview(reviewId));
  // };

  return (
    <div>
      {/* <h2>Reviews:</h2> */}
      {/* <ul> */}
        {/* {Object.values(reviews)
          .filter((review) => review.restaurant_id === restaurantId)
          .map((review) => (
            <li key={review.id}>
              <p>
                <strong>{review.nickname}</strong> - {review.overall} stars
              </p>
              <p>{review.body}</p>
              <p>Food: {review.food}</p>
              <p>Service: {review.service}</p>
              <p>Ambience: {review.ambience}</p>
              <p>Value: {review.value}</p>
              <p>Overall: {review.overall}</p>
              <button onClick={() => handleDelete(review.id)}>Delete</button>
            </li>
          ))} */}
      {/* </ul> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            value={formData.nickname}
            onChange={(e) =>
              setFormData({ ...formData, nickname: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="body">Review:</label>
          <textarea
            id="body"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="food">Food:</label>
          <input
            type="number"
            id="food"
            min="1"
            max="5"
            value={formData.food}
            onChange={(e) =>
              setFormData({ ...formData, food: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="service">Service:</label>
          <input
            type="number"
            id="service"
            min="1"
            max="5"
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service:e.target.value })}
              required
              />
              </div>
              <div>
              <label htmlFor="ambience">Ambience:</label>
              <input
              type="number"
              id="ambience"
              min="1"
              max="5"
              value={formData.ambience}
              onChange={(e) =>
              setFormData({ ...formData, ambience: e.target.value })
              }
              required
              />
              </div>
              <div>
              <label htmlFor="value">Value:</label>
              <input
              type="number"
              id="value"
              min="1"
              max="5"
              value={formData.value}
              onChange={(e) =>
              setFormData({ ...formData, value: e.target.value })
              }
              required
              />
        </div>
        <div>
            <label htmlFor="overall">Overall:</label>
              <input
              type="number"
              id="overall"
              min="1"
              max="5"
              value={formData.overall}
              onChange={(e) =>
              setFormData({ ...formData, overall: e.target.value })
              }
              required
              />
        </div>
      <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
              
              export default ReviewsBox;
