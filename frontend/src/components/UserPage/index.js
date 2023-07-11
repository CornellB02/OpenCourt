import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import "./userpage.css";

const Userprofile = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const location = useLocation();
  const history = useHistory();

  // Extract the part of the email before the "@" sign
  const emailParts = sessionUser.email.split("@");
  const emailPrefix = emailParts[0];

  // Capitalize the first letter of the email prefix
  const capitalizedPrefix = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);

  // Format the creation date
  const creationDate = new Date(sessionUser.createdAt);
  const formattedDate = `${creationDate.toLocaleString("en-US", { month: "long" })} ${creationDate.getDate()}, ${creationDate.getFullYear()}`;

  return (
    <div className="full-pro">
      <div className="user-info-pro">
        <div className="circle-out">
          <div className="circle-in">{sessionUser.email[0].toUpperCase()}</div>
          <div className="pic-up-out">
            <button className="pic-up-in">
              <span className="pic-pic">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4,6 L4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 L6,6 L7,6 C7.55228475,6 8,6.44771525 8,7 C8,7.55228475 7.55228475,8 7,8 L6,8 L6,9 C6,9.55228475 5.55228475,10 5,10 C4.44771525,10 4,9.55228475 4,9 L4,8 L3,8 C2.44771525,8 2,7.55228475 2,7 C2,6.44771525 2.44771525,6 3,6 L4,6 Z M15.1683073,7 L11.0019056,7 C10.4496208,7 10.0019056,6.55228475 10.0019056,6 C10.0019056,5.44771525 10.4496208,5 11.0019056,5 L15.9953845,5 L18,7 L20,7 C21.1045695,7 22,7.8954305 22,9 L22,18 C22,19.1045695 21.1045695,20 20,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,13 C4,12.4477153 4.44771525,12 5,12 C5.55228475,12 6,12.4477153 6,13 L6,18 L20,18 L20,9 L17.1729228,9 L15.1683073,7 Z M13,16.5 C11.0670034,16.5 9.5,14.9329966 9.5,13 C9.5,11.0670034 11.0670034,9.5 13,9.5 C14.9329966,9.5 16.5,11.0670034 16.5,13 C16.5,14.9329966 14.9329966,16.5 13,16.5 Z M13,14.5 C13.8284271,14.5 14.5,13.8284271 14.5,13 C14.5,12.1715729 13.8284271,11.5 13,11.5 C12.1715729,11.5 11.5,12.1715729 11.5,13 C11.5,13.8284271 12.1715729,14.5 13,14.5 Z">
                  </path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <h7 id="name-pro">Hi, {capitalizedPrefix}</h7> 
        <div className="container-info">
          <span className="lo-under-name">
            <span className="lo-icon">
              <svg className="svg-ic">
                <path d="M12,2 C16.418278,2 20,5.581722 20,10 C20,12.8133333 17.5666667,16.59 12.7,21.33 C12.3111565,21.7111429 11.6888435,21.7111429 11.3,21.33 C6.43333333,16.59 4,12.8133333 4,10 C4,5.581722 7.581722,2 12,2 Z M12,4 C8.6862915,4 6,6.6862915 6,10 C6,11.21 6.8,14 12,19.21 C17.2,14 18,11.21 18,10 C18,6.6862915 15.3137085,4 12,4 Z M12,7 C13.6568542,7 15,8.34314575 15,10 C15,11.6568542 13.6568542,13 12,13 C10.3431458,13 9,11.6568542 9,10 C9,8.34314575 10.3431458,7 12,7 Z M12,9 C11.4477153,9 11,9.44771525 11,10 C11,10.5522847 11.4477153,11 12,11 C12.5522847,11 13,10.5522847 13,10 C13,9.44771525 12.5522847,9 12,9 Z">
                </path>
              </svg>
            </span>
            <p className="lo-text">New York City</p>
          </span>
          <p className="join-date">Member since {formattedDate}</p> {/* Display the formatted creation date */}
        </div>
      </div>
    </div>
  );
};

export default Userprofile;