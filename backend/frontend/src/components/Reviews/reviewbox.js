import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { composeReview } from "../../store/reviews";
import { useHistory, useLocation, useParams } from "react-router-dom";
// import { selectUserId } from "../../store/session";
import { getRestaurant } from "../../store/restaurants";

function ReviewsBox() {
  const dispatch = useDispatch();
  const {restaurantId} = useParams();
  const history = useHistory();
  // const [review, setReview] = useState('');
  // const [rating, setRating] = useState(5);
  // const [validationErrors, setValidationErrors] = useState([]);
  const user = useSelector((state) => state.session.user);
  // const location = useLocation();
  const [formData, setFormData] = useState({
    nickname: "",
    body: "",
    food: "",
    service: "",
    ambience: "",
    value: "",
    overall: "",
    reviewer_firstname: user.email 
    // user_id: userId,
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
      restaurant_id: restaurantId
    };
    await dispatch(getRestaurant(restaurantId));
    await dispatch(composeReview(reviewData, restaurantId )).then(() => {
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
      history.push(`/restaurants/${restaurantId}`);
    });
  };

  // const handleDelete = (reviewId) => {
  //   dispatch(removeReview(reviewId));
  // };

  return (
    <div>
       <ol className='location_route'>
            <li className='current-loca'>
                <a href='/' className='home_class'>Home</a>
            </li>
            <li className='current-loca'>
                <div className='country_class' >United States</div>
            </li>
            <li className='current-loca'>
                <div className='city_class' >New York</div>
            </li>
        </ol>
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
      <form onSubmit={handleSubmit} className="full-form2">
      <h6 className="dubR">Rate & Review</h6>
        <div className="label-div">
          <label htmlFor="nickname" className="review-label">Nickname:</label>
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
        <div className="label-div">
          <label htmlFor="body" className="review-label">Review:</label>
          <textarea
            id="body"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="label-div">
          <label htmlFor="food" className="review-label">Food:</label>
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
        <div className="label-div">
          <label htmlFor="service" className="review-label">Service:</label>
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
              <div className="label-div">
              <label htmlFor="ambience" className="review-label">Ambience:</label>
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
              <div className="label-div">
              <label htmlFor="value" className="review-label">Value:</label>
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
        <div className="label-div">
            <label htmlFor="overall" className="review-label">Overall:</label>
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
