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
        <div className='pro-btn'>
        <div className='pro-btn-text'>{user.email[0].toUpperCase()}1</div>
        </div>
        </button>
        {showMenu && (
          <div className="profile-dropdown">
            <div className="dropdown-user">Hello, {user.email}!</div>
            <div className="earnings">
              <div className="current-e">
                <div className="earned">Earned</div>
                <div className="earn-num">
                  0
                  <span className="pts">PTS</span>
                </div>
              </div>
              <div className="next-e">
                <div className="nexre">Next reward</div>
                <span className="pts1"><p className="pts-num">2000</p>PTS</span>
              </div>
            </div>
              <div className="pts-bar">
              </div>
              <span className="learn">Learn more about points</span>
            <button className="user-button" onClick={goToProfile}>My Profile</button>
            <button className="user-button">My Dining History</button>
            <button className="user-button">My Saved Restaurants</button>

            <button className="my-button-logout" onClick={logout}>Sign Out</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileButton;
