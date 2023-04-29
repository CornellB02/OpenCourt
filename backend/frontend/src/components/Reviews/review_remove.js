import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeReview } from "../../store/reviews";

function DeleteReviewButton({ reviewId }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(removeReview(reviewId)).then(() => {
      setIsDeleting(false);
    });
  };

  return (
    <>
      <button onClick={() => setIsDeleting(true)}>Delete</button>
      {isDeleting && (
        <div>
          <p>Are you sure you want to delete this review?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setIsDeleting(false)}>No</button>
        </div>
      )}
    </>
  );
}

export default DeleteReviewButton;