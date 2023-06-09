import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Errorpage from "../Errorpage/Errorpage";
import Classes from "../pages/Classes/Classes";

import MySelect from "../pages/Dashboard/MySelect/MySelect";
import Instructors from "../pages/Instructors/Instructors";
import MyEnroll from "../pages/Dashboard/MyEnroll/MyEnroll";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

import Dashboard from "../Layout/Dashboard";

import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "admin",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageclass",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "myselect",
        element: <MySelect></MySelect>,
      },
      {
        path: "myenroll",
        element: <MyEnroll></MyEnroll>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },

  {
    path: "*",
    element: <Errorpage></Errorpage>,
  },
]);
