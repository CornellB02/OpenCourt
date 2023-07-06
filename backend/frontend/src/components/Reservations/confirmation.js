import React from "react";
import { useLocation } from "react-router-dom";

function ReservationConfirmation() {
  const location = useLocation();
  const reservation = location.state?.reservation;

  return (
    <div>
      <h2>Reservation Confirmation</h2>
      {reservation && (
        <div>
          <p>Reservation Details:</p>
          <p>Party Size: {reservation.party_size}</p>
          <p>Date: {reservation.date}</p>
          <p>Time: {reservation.time}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default ReservationConfirmation;
