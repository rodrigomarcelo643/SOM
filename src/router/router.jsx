import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Student/components/Login";
import StudentOtp from "../Student/components/StudentOtp";
import Dashboard from "../Student/components/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/OTP",
    element: <StudentOtp />,
  },
  {
    path: "/student",
    element: <Dashboard />,
  },
]);

export default router;
