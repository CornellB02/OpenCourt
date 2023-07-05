import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const goToProfile = () => {
    history.push("/profile");
  };

  return (
    <div className="right_side">
      <div className='profile-button'>
        <button onClick={openMenu} className='profile-icon'>
          <i class="fa-regular fa-user"></i>
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <div className="dropdown-user">Hello, {user.email}!</div>
            <button className="user-button" onClick={goToProfile}>My Profile</button>
            <button className="user-button">My Dining History</button>
            <button className="user-button">My Saved Restaurants</button>

            <button className="my-button-logout" onClick={logout}>Sign Out</button>
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProfileButton;
