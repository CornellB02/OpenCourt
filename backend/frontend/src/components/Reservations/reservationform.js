import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { composeReserv } from "../../store/reservs";
import { useHistory, useParams } from "react-router-dom";


function ReservationForm() {

  const dispatch = useDispatch();
  const {restaurantId} = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [formData, setFormData] = useState({
    party_size: "",
    date: "",
    time: "",
    first_name: user.email.split("@")[0],
    phone_number: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservData = {
      ...formData,
      restaurant_id: restaurantId,
      user_id: user.id
    };
    await dispatch(composeReserv(reservData, restaurantId));
    history.push(""); 
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="partySize">Party Size:</label>
          <select
            id="partySize"
            name="partySize"
            value={formData.party_size}
            onChange={(e) =>
              setFormData({ ...formData, party_size: Number(e.target.value) })
            }
            required
          >
            <option value="">Select party size</option>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phone_number}
            onChange={(e) =>
              setFormData({ ...formData, phone_number: e.target.value })
            }
            required
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number."
          />
        </div>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;
