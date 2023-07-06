import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ReservationConfirmation = () => {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  // Redirect the user to the homepage if they are not logged in
  if (!user) {
    history.push("/");
    return null;
  }

  return (
    <div>
      <h4>Reservation Confirmation</h4>
      <p>Thank you for making a reservation, {user.email.split("@")[0]}!</p>
      <p>Your reservation details:</p>
      {/* Display reservation details here */}
    </div>
  );
};

export default ReservationConfirmation;
