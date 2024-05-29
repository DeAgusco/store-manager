import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faBoxOpen, faHourglassHalf, faTruck } from '@fortawesome/free-solid-svg-icons';
import './Shipments.css';

const Shipments = () => {
  return (
    <div className="shipments">
      <div className="shipments-header">
        <h2>Shipments</h2>
      </div>
      <div className="shipments-stats">
        <div className="shipments-stat">
          <div className="icon-container">
            <FontAwesomeIcon icon={faShippingFast} />
          </div>
          <h3>120</h3>
          <p>Total Shipments</p>
          <span className="stat-change positive">+1.2%</span>
        </div>
        <div className="shipments-stat">
          <div className="icon-container">
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
          <h3>56</h3>
          <p>Pickup Package</p>
          <span className="stat-change positive">+2.2%</span>
        </div>
        <div className="shipments-stat">
          <div className="icon-container">
            <FontAwesomeIcon icon={faHourglassHalf} />
          </div>
          <h3>30</h3>
          <p>Pending</p>
          <span className="stat-change negative">-0.5%</span>
        </div>
        <div className="shipments-stat">
          <div className="icon-container">
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <h3>30</h3>
          <p>Delivery Shipments</p>
          <span className="stat-change positive">+30%</span>
        </div>
      </div>
    </div>
  );
};

export default Shipments;
