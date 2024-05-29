import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Tracking.css';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Tracking = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Shipments',
        backgroundColor: '#3498db',
        borderColor: '#3498db',
        borderWidth: 1,
        hoverBackgroundColor: '#2980b9',
        hoverBorderColor: '#2980b9',
        data: [65, 59, 80, 81, 56, 55, 40, 72, 88, 93, 47, 90],
      },
      {
        label: 'Deliveries',
        backgroundColor: '#2ecc71',
        borderColor: '#2ecc71',
        borderWidth: 1,
        hoverBackgroundColor: '#27ae60',
        hoverBorderColor: '#27ae60',
        data: [28, 48, 40, 19, 86, 27, 90, 44, 67, 84, 29, 60],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="tracking">
      <h3>Tracking</h3>
      <div className="tracking-info">
        <div className="delivery-progress">
          <div className="progress-circle">
            <div className="circle-content">
              <span>80%</span>
            </div>
          </div>
          <p>Delivery</p>
        </div>
        <div className="tracking-details">
          <p><strong>Tracking Number:</strong> QLCMFV 563041</p>
          <p><strong>Customer Name:</strong> Debra Andulayo</p>
          <p><strong>Status:</strong> Approved</p>
        </div>
        <div className="customer-info">
          <img src="https://via.placeholder.com/50" alt="Customer" className="customer-picture" />
          <p>Debra Andulayo</p>
          <p>deanna.curtis@example.com</p>
          <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
        </div>
        <div className="pickup-info">
          <p><strong>Waiting Pickup:</strong> 26 April, 11:30 AM, Warsaw</p>
          <p><strong>Pickup:</strong> 26 April, 12:00 AM, Warsaw</p>
        </div>
        <div className="tracking-graph">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Tracking;
