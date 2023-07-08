import { useState } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/reviews";

function UpdateReviewButton({ review }) {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    nickname: review.nickname,
    body: review.body,
    food: review.food,
    service: review.service,
    ambience: review.ambience,
    value: review.value,
    overall: review.overall,
    reviewer_firstname: review.reviewer_firstname,
    restaurant_id: review.restaurant_id,
  });

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editReview(review.id, formData));
    // console.log(review.id)
    // console.log( "-------------------------")
    setIsUpdating(false);
  };

  const handleCancel = () => {
    setIsUpdating(false);
  };

  return (
    <div className="update-container">
      <button className="update-b" onClick={handleUpdate}>Update</button>
      {isUpdating && (
        <form onSubmit={handleSubmit}  className="full-form3">
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
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
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
                setFormData({ ...formData, service: e.target.value })
              }
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
            <button type="submit">Update</button>

      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  )}
</div>
);
}

export default UpdateReviewButton;