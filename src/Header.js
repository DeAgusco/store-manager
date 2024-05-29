import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="notification-profile">
        <FontAwesomeIcon icon={faBell} className="notification-icon" />
        <img src="https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg" alt="Profile" className="profile-picture" />
      </div>
    </div>
  );
};

export default Header;
