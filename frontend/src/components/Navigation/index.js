import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Modal } from '../context/Modal';
import LoginFormPage from '../LoginFormsPage/login';
import SignupFormPage from '../SignUpFormPage.js';
// import steakbooklogo from './steakbooklogo'
import steakbooklogo from './steakbooklogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchModule from '../context/searchModule';
import CalanderButton from './CalanderButton';
import UpdatesButton from './UpdatesButton';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };


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
    <div className='Navpage'>
      <div className='businesses'>
        <a href="https://github.com/CornellB02" target="_blank">
          <span className='github'>
            <i class="fa-brands fa-github"></i>
          </span>
        </a>


  {/* <label htmlFor="language-select"></label> */}
  <select id="language-select">
    <option value="de">Deutsch</option>
    <option value="en">English</option>
    <option value="es">Español</option>
    <option value="fr">Français</option>
    <option value="it">Italiano</option>
    <option value="nl">Nederlands</option>
    <option value="ja">日本語</option>
  </select>
</div>


      <nav className="navbar">
      <NavLink className='nav-logo' exact to='/'><span className='Logo'><img className='nav-logo-img' src={steakbooklogo} alt="" /></span></NavLink>
        <div className="navbar-nav">
          {sessionUser ? <div className='user_logged'>
            {/* <div className='pro-btn'></div> */}
            <div className='profile1'>
            <ProfileButton user={sessionUser} /> 
            </div>
            <div className='profile1'>
          <CalanderButton user={sessionUser} /> 
          </div>
          <div className='profile1'>
          <UpdatesButton user={sessionUser} /> 
          </div>


          {/* <i class="fa-regular fa-calendar"></i>
          <i class="fa-regular fa-bell"></i> */}
          </div>
           : (
            <div className="authbuttons">
              <button type="button" className="signup" onClick={handleSignupClick}><p className='s-up-words'>Sign Up</p></button>
                &nbsp;
              <button type="button" className="login" onClick={handleLoginClick}><p className='s-up-words'>Sign In</p></button>
              {/* <button class="search-button" onClick={handleSearchClick}>
                 {isSearchOpen && <SearchModule isOpen={isSearchOpen} isClose={handleCloseSearch} />}
                <i class="fa-solid fa-magnifying-glass"></i>
              </button> */}
            </div>
          )}
          {/* <div className='magnifi'>cs</div> */}
        </div>
        <button class="search-button" onClick={handleSearchClick}>
                 {isSearchOpen && <SearchModule isOpen={isSearchOpen} isClose={handleCloseSearch} />}
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
        {/* <i class="fa-solid fa-magnifying-glass" id='magni'></i> */}
      </nav>
      {isModalOpen && !sessionUser && (
        <Modal onClose={handleCloseModal}>
          {modalType === 'login' ? <LoginFormPage onClose={handleCloseModal} /> : <SignupFormPage onClose={handleCloseModal} />}
        </Modal>
      )}
    </div>
  );
}

export default Navigation;
