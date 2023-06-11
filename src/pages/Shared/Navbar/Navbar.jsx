import React, { useContext } from "react";
import { FaMusic, FaShoppingCart, FaUser, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
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
  const navList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {/* <li>
        <Link to="/dashboard/myselect">
          <button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>

            <div className="badge badge-secondary">+{classes?.length || 0}</div>
          </button>
        </Link>
      </li> */}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-60 text-white bg-red-900 max-w-screen-xl ">
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
          <a className="btn btn-ghost normal-case text-xl">
            <FaMusic></FaMusic> Music King
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          {user?.photoURL ? (
            <>
              <img
                className="rounded-2xl w-8 h-8 mr-2"
                src={user?.photoURL}
                alt=""
              />
              <p className="text-xl">{user?.displayName}</p>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Logout
              </button>
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
    </>
  );
};

export default Navbar;
