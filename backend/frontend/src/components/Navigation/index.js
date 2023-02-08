// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import './Navigation.css';

// function Navigation() {
//   const sessionUser = useSelector(state => state.session.user);

//   return (
//     <nav className="navbar">
//       <NavLink exact to="/" className="navbar-brand">Home</NavLink>
//       <div className="navbar-nav">
//         {sessionUser ? <ProfileButton user={sessionUser} /> : (
//           <>
//             <NavLink to="/login" className="nav-item nav-link">Log In</NavLink>
//             <NavLink to="/signup" className="nav-item nav-link">Sign Up</NavLink>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navigation;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Modal } from '../context/Modal';

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
        <NavLink exact to="/" className="navbar-brand">Home</NavLink>
        <div className="navbar-nav">
          {sessionUser ? <ProfileButton user={sessionUser} /> : (
            <>
              <NavLink to="/login" className="nav-item nav-link" onClick={handleLoginClick}>Log In</NavLink>
              <NavLink to="/signup" className="nav-item nav-link" onClick={handleSignupClick}>Sign Up</NavLink>
            </>
          )}
        </div>
      </nav>
      {isModalOpen && (
        <Modal type={modalType} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Navigation;

