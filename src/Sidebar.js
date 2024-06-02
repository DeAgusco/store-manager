import React from 'react';
import { FaHome, FaBox, FaShippingFast, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <FaShippingFast />
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item active">
          <FaHome />
        </li>
        <li className="sidebar-item">
          <FaBox />
        </li>
        <li className="sidebar-item">
          <FaShippingFast />
        </li>
      </ul>
      <div className="sidebar-item-bottom">
        <FaSignOutAlt />
      </div>
    </div>
  );
};

export default Sidebar;
