import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeReview } from "../../store/reviews";
import "./reviews.css"

function DeleteReviewButton({ reviewId }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(removeReview(reviewId)).then(() => {
      "Review Deleted"
      setIsDeleting(false);
    });
  };

  return (
    <>
      <button class="delete" onClick={() => setIsDeleting(true)}>Delete</button>
      {isDeleting && (
        <div className="delete-con">
          <p className="deleteor">Are you sure you want to delete this review?</p>
          <div className="del-but">
          <button className="del-yes" onClick={handleDelete}>Yes</button>
          <button className="del-no" onClick={() => setIsDeleting(false)}>No </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteReviewButton;