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
import useMySelect from "../hooks/useMySelect";

const Dashboard = () => {
  // todo load data from the server to have dynamic isAdmoin based on data
  // const isAdmin = true;
  const [classes] = useMySelect();
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
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/admin">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <FaUserFriends></FaUserFriends> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageusers">
                    <FaSchool></FaSchool> Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myselect">
                    <FaUserFriends></FaUserFriends> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myenroll">
                    <FaSchool></FaSchool> My Enrolled Classes
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/payment">
                    <FaWallet></FaWallet> Student Payment
                  </NavLink>
                </li>
              </>
            )}

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
            {isInstructor && (
              <>
                <li>
                  <NavLink to="/dashboard/addclass">
                    <FaUserFriends></FaUserFriends> Add class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclasses">
                    <FaUserFriends></FaUserFriends> My Classes
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default Dashboard;
