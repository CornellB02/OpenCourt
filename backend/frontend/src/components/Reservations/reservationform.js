import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { composeReserv } from "../../store/reservs";
import { useHistory, useParams } from "react-router-dom";
import "./reservation.css"

function ReservationForm() {

  const dispatch = useDispatch();
  const {restaurantId} = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [formData, setFormData] = useState({
    party_size: "",
    date: "",
    time: "",
    first_name: user ? user.email.split("@")[0] : "",
    phone_number: user ? user.phone_number : ""
  });

  const [timesBooked] = useState(Math.floor(Math.random() * 101));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservData = {
      ...formData,
      restaurant_id: restaurantId,
      user_id: user.id,
      phone_number: "0000000000",
      first_name: user.email.split("@")[0]
    };
    await dispatch(composeReserv(reservData, restaurantId));
    history.push({
      pathname: "/reservation-confirmation",
      state: { reservation: reservData },
    });
  };

  return (
    <div className="sticky-container">
    <div className="full_form">
      <h4>Make A Reservation</h4>
      <form onSubmit={handleSubmit} className="form_reserv">
        <div className="party-size">
          <label htmlFor="partySize" className="partySize">Party Size</label>
          <select
          className="partySize-select"
            id="partySize"
            name="partySize"
            value={formData.party_size}
            onChange={(e) =>
              setFormData({ ...formData, party_size: Number(e.target.value) })
            }
            required
          >
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 person</option>
            <option value="5">5 people</option>
            <option value="6">6 people</option>
            <option value="7">7 person</option>
            <option value="8">8 people</option>
            <option value="9">9 people</option>
            <option value="10">10 person</option>
            <option value="11">11 people</option>
            <option value="12">12 people</option>
            <option value="13">13 person</option>
            <option value="14">14 people</option>
            <option value="15">15 people</option>
            <option value="16">16 person</option>
            <option value="17">17 people</option>
            <option value="18">18 people</option>
            <option value="19">19 person</option>
            <option value="20">20 people</option>
            <option value="22">20+ people</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="date-sec">
          <label htmlFor="date" className="datetext">Date</label>
          <input

            type="date"
            id="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            required
          />
        <div className="time-sec">
          <label htmlFor="time" className="timetext">Time</label>
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
              </div>
        {/* <div>
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
        </div> */}
        {/* <div>
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
        </div> */}
        <button type="submit" className="submit2">Find A Table</button>
        <div className="times_booked">
          Booked {timesBooked} times today 
        </div>
      </form>
    </div>
    </div>
  );
}

export default ReservationForm;
