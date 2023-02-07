import React, { useState } from "react";

const ProfileForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName) {
      alert("First name cannot be blank");
    } else if (!lastName) {
      alert("Last name cannot be blank");
    } else if (!phoneNumber) {
      alert("Phone number cannot be blank");
    } else if (phoneNumber.length < 10) {
      alert("Phone number must be at least 10 characters long");
    } else {
      // Send the data to the backend for further validation and storage
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
