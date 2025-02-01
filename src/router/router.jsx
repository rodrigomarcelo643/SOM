import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Student/components/Login";
import StudentOtp from "../Student/components/StudentOtp";
import Dashboard from "../Student/components/Dashboard";
import StudentForgotPassword from "../Student/components/StudentForgotPassword";
import AdminSidebar from "../Admin/Navbar/AdminNavbar";

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
  {
    path: "/forgotpassword",
    element: <StudentForgotPassword />,
  },
  {
    path: "/Admin",
    element: <AdminSidebar />,
  },
]);

export default router;
