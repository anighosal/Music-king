import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaHome,
  FaSchool,
  FaUserFriends,
  FaWallet,
} from "react-icons/fa";

const Dshboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-blue-600 text-white">
          {/* Sidebar content here */}
          <li>
            <Link>
              <FaHome></FaHome> User Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myselect">
              <FaUserFriends></FaUserFriends> My Selected Classes
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myenroll">
              <FaSchool></FaSchool> My Enrolled Classes
            </Link>
          </li>

          <li>
            <Link>
              <FaWallet></FaWallet> Student Payment
            </Link>
          </li>

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome>Home
            </Link>
          </li>
          <li>
            <Link to="/instructors">
              <FaChalkboardTeacher></FaChalkboardTeacher> Instructors
            </Link>
          </li>
          <li>
            <Link to="/classes">
              <FaUserFriends></FaUserFriends> Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dshboard;
