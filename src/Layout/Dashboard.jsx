import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import {
  FaChalkboardTeacher,
  FaHome,
  FaSchool,
  FaUserFriends,
  FaWallet,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = ({ user }) => {
  // todo load data from the server to have dynamic isAdmoin based on data
  // const isAdmin = true;

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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
      <div className="drawer-side bg-blue-600">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <Fade>
          <ul className="menu p-4 w-80 h-full  text-white">
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/admin">
                    <FaHome /> Admin Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageusers">
                    <FaUserFriends /> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <FaSchool /> Manage Classes
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/instructor">
                    <FaHome /> Instructor Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclasses">
                    <FaSchool /> My Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addclass">
                    <FaUserFriends /> Add Classes
                  </NavLink>
                </li>
              </>
            )}
            {!isAdmin && !isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard">
                    <FaHome /> User Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myselect">
                    <FaSchool /> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myenroll">
                    <FaSchool /> My Enrolled
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment">
                    <FaWallet /> Payment
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/classes"> Classes</NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default Dashboard;
