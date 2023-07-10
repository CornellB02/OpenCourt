import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeReserv } from "../../store/reservs";
// import "./reviews.css"

function DeleteReservationButton({ reservationId }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(removeReserv(reservationId)).then(() => {
      setIsDeleting(false);
    });
  };

  return (
    <div className="delete-whole">
      <button class="delete-reserv" onClick={() => setIsDeleting(true)}>Delete</button>
      {isDeleting && (
        <div className="delete-con">
          <p className="deleteor">Are you sure you want to delete this reservation?</p>
          <div className="del-but">
          <button className="del-yes" onClick={handleDelete}>Yes</button>
          <button className="del-no" onClick={() => setIsDeleting(false)}>No </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteReservationButton;