import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dash-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
      <h2 className="text-3xl font-bold">Welcome to your Dashboard</h2>
        <Outlet></Outlet>
        
      </div>
      <div className="drawer-side">
        <label htmlFor="dash-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/*<!-- Sidebar content here -->*/}
          <li>
            <Link to="/dashboard">My appointment</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
