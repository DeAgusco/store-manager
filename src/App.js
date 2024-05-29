import React from 'react';
import Sidebar from './Sidebar';
import Shipments from './Shipments';
import Header from './Header';
import Tracking from './Tracking';
import Analytics from './Analytics';
import RecentActivity from './RecentActivity';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <div className="main-content">
        <div className="static-h1">
        <h1>Good Morning, John</h1>
        </div>
        <Tracking />
        <Shipments />
        <Analytics />
        <RecentActivity />
      </div>
    </div>
  );
}

export default App;
