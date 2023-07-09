
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont } from "@fortawesome/free-solid-svg-icons";
// import { regular }



function CalanderButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
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

  return (
    <div className="midd">
    <div className='calander-button'>
      <button onClick={openMenu} className='calander-icon'>
        {/* <i className="fa-solid fa-user-circle" /> */}
        <i class="fa-regular fa-calendar"></i>
      </button>
      {showMenu && (
        <ul className="calander-dropdown">

        </ul>
      )}
    </div>
      {/* <i class="fa-light fa-calendar"></i> */}
    {/* <div className="dates-button"> */}
    {/* </div> */}
    </div>
  );
}

export default CalanderButton;