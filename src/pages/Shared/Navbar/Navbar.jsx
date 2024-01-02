import React, { useContext } from "react";
import { FaMusic, FaShoppingCart, FaUser, FaUserCircle, FaUserFriends } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import useMySelect from "../../../hooks/useMySelect";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [classes] = useMySelect();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // const navList = (
  //   <>
  //       <li>
  //       <NavLink to="/" activeClassName="active-link">Home</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/instructors" activeClassName="active-link">Instructors</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/classes" activeClassName="active-link">Classes</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink>
  //     </li>
   
    
  //   </>
  // );
  return (
    <>
    {/* <div className="max-screen-xl mx-auto">
  <div className="navbar bg-opacity-60 text-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl pl-10 ml-10">
            <FaMusic className="text-orange-400"></FaMusic> Music King
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end pr-10 mr-10">
          {user?.photoURL ? (
            <>
              <img
                className="rounded-2xl w-8 h-8 "
                src={user?.photoURL}
                alt=""
              />
              
              <div onClick={handleLogOut} className="">
                Logout
              </div>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>{" "}
              </li>
            </>
          )}
        </div>
      </div>
     </div> */}
     <div className="navbar mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          <ul
            tabIndex={0}
            className="text-white menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-500 rounded-box w-52"

          >
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Instructors
            </NavLink>
            <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Classes
            </NavLink>
          
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Dashboard
            </NavLink>
          </ul>
        </div>

        <Link>
        <div className="btn btn-ghost normal-case text-xl lg:pl-10 lg:ml-10">
            <FaMusic className="text-orange-400"></FaMusic> Music King
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/"
          >
            Home
          </NavLink>
        
        
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/instructors"
            >
              Instructors
            </NavLink>
       
        
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/classes"
            >
              Classes
            </NavLink>
         
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end lg:pr-10 lg:mr-10 ">
        {user?.photoURL ? (
          <img className="rounded-full w-10 h-10" src={user?.photoURL} alt="" />
        ) : (
          <FaUserCircle></FaUserCircle>
        )}

        {user ? (
          <div className="text-black cursor-pointer" onClick={handleLogOut}>
            Log out
          </div>
        ) : (
          <NavLink className="text-black" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
    </>
  );
};

export default Navbar;
