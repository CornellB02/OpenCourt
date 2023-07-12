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
          <span className="booked">
            <svg className="icon-book" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5,5 C15.2239,5 15,5.223846 15,5.5 L15,6.5 C15,6.77615 15.2239,7 15.5,7 L17.5858,7 L14,10.58578 L12.70711,9.29291 L12.35355,8.93933 C12.15829,8.74408 11.84171,8.74408 11.64645,8.93933 L11.29289,9.29291 L5,15.5858 L5,7 L11.5,7 C11.77614,7 12,6.77615 12,6.5 L12,5.5 C12,5.22385 11.77614,5 11.5,5 L5,5 C3.89543,5 3,5.89542 3,7 L3,17 C3,18.1046 3.89543,19 5,19 L19,19 C20.1046,19 21,18.1046 21,17 L21,14.5 C21,14.2238 20.7761,14 20.5,14 L19.5,14 C19.2239,14 19,14.2238 19,14.5 L19,17 L6.4142,17 L12,11.41422 L13.2929,12.70709 L13.6464,13.06067 C13.8417,13.25592 14.1583,13.25592 14.3536,13.06067 L14.7071,12.70709 L19,8.41422 L19,10.5 C19,10.77615 19.2239,11 19.5,11 L20.5,11 C20.7761,11 21,10.77615 21,10.5 L21,6 L21,5.5 C21,5.223846 20.7761,5 20.5,5 L20,5 L15.5,5 Z"></path>
            </svg>
          </span>
           <div className="textbooked">
          Booked {timesBooked} times today 
        </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default ReservationForm;
