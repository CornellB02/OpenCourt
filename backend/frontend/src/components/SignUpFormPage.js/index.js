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
// import { ModalContext } from "../context/Modal";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './SignUpForm.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.signup({ email, password }))
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

    dispatch(sessionActions.login({ email: 'Demolition@user.com' , password: 'passwordy'}))
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
        <div>
          <h1>Enter your email</h1>
          <p>Enter the email associated with your OpenTable account, social login or new email. We’ll send a code to that email</p>
          </div>
          {/* <div> */}
          <input
              placeholder="Email"
              type="text"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
        {/* </div> */}
        <br />
        {/* <br /> */}
                {/* <label for="password">Password</label> */}
                        <input
                            placeholder="Password"
                            type='password'
                            id='password'
                            // value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className='password-message'>
                          <br></br>
                            {/* <p>Passwords must contain at least six characters.</p> */}
                        </div>
        <button type="submit">Continue</button>
        <br></br>
        <button className='demo-button' onClick={e => demoLogin(e)}>Demo Login</button>
      </form>
    </div>
  );
}

export default SignupFormPage;
