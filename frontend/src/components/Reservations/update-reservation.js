import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams} from "react-router-dom";
import { editReserv } from "../../store/reservs";

function UpdateReservationButton({ reservation }) {
  const { restaurantId } = useParams()
  const history = useHistory();
  const restaurant = useSelector((state) => state.restaurants[restaurantId])
  // const reservation = useSelector((state) => state.reservs[reservationId])
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    first_name: reservation.first_name,
    phone_number: reservation.phone_number,
    party_size: reservation.party_size,
    date: reservation.date,
    time: reservation.time,
    special_request: reservation.special_request,
    restaurant_id: reservation.restaurant_id,
  });

  // const history = useHistory();

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editReserv(reservation.id, formData));
    history.push("/profile");
    setIsUpdating(false);
  };

  const handleCancel = () => {
    setIsUpdating(false);
  };

  return (
    <div className="update-whole">
      <button  className="reserv-update" onClick={handleUpdate}>Update</button>
      {isUpdating && (
        <form onSubmit={handleSubmit} className="res-up-form" >
          <div className="inner-upres-form">
            <label htmlFor="first_name">Name:</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              required
            />
          </div>
          <div className="phone_number">
            <label htmlFor="phone_number">Phone Number:</label>
            <textarea
              id="phone_number"
              value={formData.phone_number}
              onChange={(e) =>
                setFormData({ ...formData, phone_number: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div className="party_size">
            <label htmlFor="party_size">Party Size:</label>
            <input
              type="number"
              id="party_size"
              value={formData.party_size}
              onChange={(e) =>
                setFormData({ ...formData, party_size: e.target.value })
              }
              required
            />
          </div>
          <div className="date1">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date1"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
            />
          </div>
          <div className="time1">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time1"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              required
            />
          </div>
          <div className="s-rq">
            <label htmlFor="special_request">Special Request:</label>
            <input
              type="text"
              id="special_request"
              placeholder="optional"
              value={formData.special_request}
              onChange={(e) =>
                setFormData({ ...formData, special_request: e.target.value })
              }
            />
          </div>
          {/* <div className="sub-can"> */}
          <button type="submit" className="submit3">Save Changes</button>
          <button type="button" className="cancel2" onClick={handleCancel}>
            Cancel
          </button>
          {/* </div> */}
        </form>
      )}
    </div>
  );
}

export default UpdateReservationButton;
