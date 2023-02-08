// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from 'react-router-dom';
// import * as sessionActions from "../../store/session";
// import './SignUpForm.css'
// import { Modal } from "../context/Modal";

// function SignupFormPage() {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(email); // check if email variable has the expected value
//     return dispatch(sessionActions.signup({ email }))
//       .then(() => {
//         // Redirect the user to the users page once they have successfully signed up and logged in
//         history.push("/users");
//       })
//       .catch(async (res) => {
//         console.log(res); // check if the response from the server is as expected
//         let data;
//         try {
//           data = await res.clone().json();
//         } catch {
//           data = await res.text();
//         }
//         console.log(data); // check if the response data is as expected
//         if (data?.errors) setErrors(data.errors);
//         else if (data) setErrors([data]);
//         else setErrors([res.statusText]);
//       });
//   };

//   const demoLogin = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     dispatch(sessionActions.login({ email: 'Demo-lition@user.com' }))
//       .then(() => {
//         // Redirect the user to the users page once they have successfully signed up and logged in
//         history.push("/users");
//       });
//   };

//   return (
//     <div>
//       <button onClick={() => setShowModal(true)}>Sign Up</button>
//       {showModal && (
//         <Modal>
//           <form onSubmit={handleSubmit}>
//             <ul>
//               {errors.map(error => <li key={error}>{error}</li>)}
//             </ul>
//             <label>   
//               Email
//               <input
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//               />
//             </label>
//             <button type="submit">Sign Up</button>
//             <br></br>
//             <button className='login-form-button' onClick={e => demoLogin(e)}>Demo Login</button>
//             <button onClick={() => setShowModal(false)}>Close</button>
//           </form>
//         </Modal>
//       )}
//     </div>
// );
// }
// export default SignupFormPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './SignUpForm.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.signup({ email }))
      .then(() => {
        history.push("/users");
      })
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const demoLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(sessionActions.login({ email: 'Demo-lition@user.com' }))
      .then(() => {
        history.push("/users");
      });
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label>
          Email
          <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
        </label>
        <button type="submit">Sign Up</button>
        <br></br>
        <button className='login-form-button' onClick={e => demoLogin(e)}>Demo Login</button>
      </form>
    </div>
  );
}

export default SignupFormPage;
