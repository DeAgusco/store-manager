import React from 'react';
import './RecentActivity.css';

const recentActivities = [
  { product: '#2986-30', shipper: 'JNE', status: 'Approved', customer: 'Courtney', customerId: 'LEMDIJ 302030' },
  { product: '#1264-87', shipper: 'DHL', status: 'Rejected', customer: 'Esther', customerId: 'LEMDIJ 302030' },
  { product: '#5723-89', shipper: 'RedX', status: 'Approved', customer: 'Mitchell', customerId: 'WRKFMJ 858665' },
  { product: '#6478-26', shipper: 'Amazon', status: 'Approved', customer: 'Debra', customerId: 'QLCMFV 563041' },
  // Add more recent activities as needed
];

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Shipper</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {recentActivities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.product}</td>
              <td>{activity.shipper}</td>
              <td className={`status ${activity.status.toLowerCase()}`}>{activity.status}</td>
              <td>{activity.customer}</td>
              <td>{activity.customerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;
