import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors/Instructors";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Errorpage from "../Errorpage/Errorpage";
import Classes from "../pages/Classes/Classes";
import Dshboard from "../Layout/Dshboard";
import MySelect from "../pages/Dashboard/MySelect/MySelect";

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
    element: <Dshboard></Dshboard>,
    children: [
      {
        path: "myselect",
        element: <MySelect></MySelect>,
      },
    ],
  },

  {
    path: "*",
    element: <Errorpage></Errorpage>,
  },
]);
