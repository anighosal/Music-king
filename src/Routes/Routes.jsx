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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";

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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "instructorhome",
        element: <InstructorHome></InstructorHome>,
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
