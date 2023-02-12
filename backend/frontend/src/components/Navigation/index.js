// // import React from 'react';
// // import { NavLink } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// // import ProfileButton from './ProfileButton';
// // import './Navigation.css';

// // function Navigation() {
// //   const sessionUser = useSelector(state => state.session.user);

// //   return (
// //     <nav className="navbar">
// //       <NavLink exact to="/" className="navbar-brand">Home</NavLink>
// //       <div className="navbar-nav">
// //         {sessionUser ? <ProfileButton user={sessionUser} /> : (
// //           <>
// //             <NavLink to="/login" className="nav-item nav-link">Log In</NavLink>
// //             <NavLink to="/signup" className="nav-item nav-link">Sign Up</NavLink>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navigation;

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import './Navigation.css';
// import { Modal } from '../context/Modal';
// import Lbutton from './loginbutton';

// function Navigation() {
//   const sessionUser = useSelector(state => state.session.user);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState(null);

//   const handleLoginClick = () => {
//     setModalType('login');
//     setIsModalOpen(true);
//   };

//   const handleSignupClick = () => {
//     setModalType('signup');
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <NavLink exact to="/" className="navbar-brand">Home</NavLink>
//         <div className="navbar-nav">
//           {sessionUser ? <ProfileButton user={sessionUser} /> : (
//             <>
//               <NavLink to="/login" className="nav-item nav-link" onClick={handleLoginClick}>Log In</NavLink>
//               {/* <Lbutton /> */}
//               <NavLink to="/signup" className="nav-item nav-link" onClick={handleSignupClick}>Sign Up</NavLink>
//             </>
//           )}
//         </div>
//       </nav>
//       {isModalOpen && (
//         <Modal type={modalType} onClose={handleCloseModal} />
//       )}
//     </>
//   );
// }

// export default Navigation;

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import './Navigation.css';
// import { Modal } from '../context/Modal';
// import LoginFormPage from '../LoginFormsPage/login';
// import { useHistory } from 'react-router-dom';

// function Navigation() {
//   const sessionUser = useSelector(state => state.session.user);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const history = useHistory();

//   const handleLoginClick = () => {
//     setIsModalOpen(true);
//     // history.push("/login");
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <NavLink exact to="/" className="navbar-brand">Home</NavLink>
//         <div className="navbar-nav">
//           {sessionUser ? <ProfileButton user={sessionUser} /> : (
//             <>
//               <button onClick={handleLoginClick}>Log In</button>
//               <NavLink to="/signup" className="nav-item nav-link">Sign Up</NavLink>
//             </>
//           )}
//         </div>
//       </nav>
//       {isModalOpen && (
//         <Modal onClose={handleCloseModal}>
//           <LoginFormPage onClose={handleCloseModal} />
//         </Modal>
//       )}
//     </>
//   );
// }

// export default Navigation;
 

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Modal } from '../context/Modal';
import LoginFormPage from '../LoginFormsPage/login';
import SignupFormPage from '../SignUpFormPage.js';
// import steakbooklogo from './steakbooklogo'
import steakbooklogo from './steakbooklogo.png';
// import 

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleLoginClick = () => {
    setModalType('login');
    setIsModalOpen(true);
  };

  const handleSignupClick = () => {
    setModalType('signup');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="navbar">
      <NavLink className='nav-logo' exact to='/'><img className='nav-logo-img' src={steakbooklogo} alt="" /><span className='Logo'></span></NavLink>
        <div className="navbar-nav">
          {sessionUser ? <ProfileButton user={sessionUser} /> : (
            <div className="authbuttons">
              <button type="button" className="signup" onClick={handleSignupClick}>Sign Up</button>
                &nbsp;
              <button type="button" className="login" onClick={handleLoginClick}>Sign In</button>
            </div>
          )}
        </div>
      </nav>
      {isModalOpen && !sessionUser && (
        <Modal onClose={handleCloseModal}>
          {modalType === 'login' ? <LoginFormPage onClose={handleCloseModal} /> : <SignupFormPage onClose={handleCloseModal} />}
        </Modal>
      )}
    </>
  );
}

export default Navigation;
