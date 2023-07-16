// import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { Modal } from '../context/Modal';
// import { useHistory } from 'react-router-dom';
// // import './LoginForm.css';

// function LoginFormPage() {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector(state => state.session.user);
//   const [email, setEmail] = useState('');
//   const [errors, setErrors] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const history = useHistory();

//   const demoLogin = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     dispatch(sessionActions.login({ email: 'Demo-lition@user.com' }))
//       .then(() => {
//         // Redirect the user to the users page once they have successfully signed up and logged in
//         history.push("/users/");
//       });
//   };

//     if (sessionUser) return <Redirect to="/login" />;

//     const handleSubmit = (e) => {
//     e.preventDefault(); 
//     setErrors([]);
//     return dispatch(sessionActions.login({ email }))
//         .catch(async (res) => {
//         let data;
//         try {
//           // .clone() essentially allows you to read the response body twice
//             data = await res.clone().json();
//         } catch {
//           data = await res.text(); // Will hit this case if the server is down
//         }
//         if (data?.errors) setErrors(data.errors);
//         else if (data) setErrors([data]);
//         else setErrors([res.statusText]);
//         });
//     }
//     return (
//       <div>
//         {/* <button onClick={() => setShowModal(true)}>Login</button> */}
//         {showModal && (
//           // <Modal>
//             <form onSubmit={handleSubmit}>
//               <ul>
//                 {errors.map(error => <li key={error}>{error}</li>)}
//               </ul>
//               <label>   
//                 Email
//                 <input
//                     type="text"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//               </label>
//               <button type="submit">Login</button>
//               <br></br>
//               <button className='login-form-button' onClick={e => demoLogin(e)}>Demo Login</button>
//               <button onClick={() => setShowModal(false)}>Close</button>
//             </form>
//           // </Modal>
//        )} 
//       </div>
//   );
//   }
//   export default LoginFormPage

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [password, setPassword] = useState('');

  const demoLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(sessionActions.login({ email: 'demo@user.io' , password: 'password'}))
    .then(() => {
      history.push("/");
    });
};

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      dispatch(sessionActions.login({ email, password }))
        .then(() => {
          // On successful login, refresh the page
          history.push("/"); 
          window.location.reload();
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
    }
    return (
        <form onSubmit={handleSubmit}>
          <div>
          <h1>Enter your email</h1>
          <p>Enter the email associated with your SteakBook account, social login or new email. We’ll send a code to that email</p>
          </div>
            <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />
           <input
                            placeholder="Password"
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className='password-message'>
                          <br></br>
          <ul className='error-list'>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
                            {/* <p>Passwords must contain at least six characters.</p> */}
                        </div>
          <button type="submit">Continue</button>
          <br></br>
          <button className='demo-button' onClick={e => demoLogin(e)}>Demo Login</button>
        </form>
  );
}
export default LoginFormPage

