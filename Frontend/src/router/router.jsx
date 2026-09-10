import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.jsx";
import SignUp from "../pages/SignUp.jsx";
import Login from "../pages/Login.jsx";
import Profile from "../pages/Profile.jsx";
import ProtectedRoute from "./protectedRoute/ProtectedRoute.jsx";
import ForgetPassword from "../pages/ForgetPassword.jsx";
import PublicRoute from "./publicRoute/PublicRoute.jsx";
import EducatorRoute from "./protectedRoute/EducatorRoute.jsx";
import CreateCourse from "../pages/educator/CreateCourse.jsx";
import Courses from "../pages/educator/Courses.jsx";
import EditCourse from "../pages/educator/EditCourse.jsx";
import Dashboard from "../pages/educator/Dashboard.jsx";
import EditProfile from "../pages/EditProfile.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //Home-> accessible for everyone
      {
        index: true,
        element: <Home />,
      },

      //Public route -> for logged out user
      {
        element: <PublicRoute />,
        children: [
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "forget",
            element: <ForgetPassword />,
          },
        ],
      },

      //protected route -> for logged in users

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "editprofile",
            element: <EditProfile/>,
          },
        ],
      },

      //Educator route -> only educator is allowed

      {
        element: <EducatorRoute/>,
        children: [
          {
            path: "dashboard",
            element: <Dashboard/>
          },
          {
            path: "createcourse",
            element: <CreateCourse/>
          },
          {
            path: "courses",
            element: <Courses/>
          },
          {
            path: "editcourse",
            element: <EditCourse/>
          }
        ]
      }
    ],
  },
]);

export default router;
