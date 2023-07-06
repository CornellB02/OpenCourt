import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Navigation/NavBar";

function ReservationConfirmation() {
  const location = useLocation();
  const reservation = location.state?.reservation;

  return (
    <div className="confirm-container">
        {/* <NavBar> */}
        <div className="nav-bar1">
        <NavBar />
        </div>
        <div className="page-details">
      <h5>Reservation Confirmation</h5>
      {reservation && (
        <div>
          <span className="detail">Reservation Details<p className="reserv_det"></p></span>
          <span className="detail">Party Size<p className="reserv_det">{reservation.party_size}</p></span>
          <span className="detail">Date<p className="reserv_det">{reservation.date}</p></span>
          <span className="detail">Time<p className="reserv_det">{reservation.time}</p></span>
          {/* Add more details as needed */}
        </div>
      )}
      </div>
    </div>
  );
}

export default ReservationConfirmation;
