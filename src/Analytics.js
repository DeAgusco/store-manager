import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Analytics.css';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
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
    <div className="analytics">
      <h3>Analytics</h3>
      <div className="analytics-graph">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;
