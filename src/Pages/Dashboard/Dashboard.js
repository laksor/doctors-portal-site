import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dash-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
      <h2 className="text-3xl font-bold">Welcome to your Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dash-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/*<!-- Sidebar content here -->*/}
          <li>
            <Link to="/dashboard">My appointment</Link>
          </li>
         { admin && <li>
            <Link to="/dashboard/users">All patient</Link>
            <Link to="/dashboard/addDoctor">Add a Doctor</Link>
            <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
          </li>
         }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
