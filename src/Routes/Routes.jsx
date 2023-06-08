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
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";

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
