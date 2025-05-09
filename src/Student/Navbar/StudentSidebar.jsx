import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import dashboardInactive from "../../assets/dashboardInactive.png";
import dashboardActive from "../../assets/dashboardActive.png";
import enrollmentInactive from "../../assets/enrollmentInactive.png";
import enrollmentActive from "../../assets/enrollmentActive.png";
import folderInactive from "../../assets/folderInactive.png";
import folderActive from "../../assets/folderActive.png";
import profileInactive from "../../assets/profileInactive.png";
import profileActive from "../../assets/profileActive.png";
import logoutIcon from "../../assets/logout.png";
import logo from "../../assets/SWU.png";
import profile from "../../assets/profile.jpg";
import sadImg from "../../assets/sad.png";
import navbarBG from "../../assets/navbarBG.png";
import { useNavigate } from "react-router-dom";

// page components
import Home from "../pages/Home";
import Enrollment from "../pages/Enrollment";
import Folder from "../pages/Folder";
import Profile from "../pages/Profile";

function StudentSidebar() {
  // Set the default active component to Dashboard
  const [active, setActive] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Set the active tab based on the URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(2); // Get the hash part after #/
    if (hash) {
      setActive(hash.charAt(0).toUpperCase() + hash.slice(1)); // Capitalize the hash value
    } else {
      setActive("Dashboard"); // Default to Dashboard if no hash is found
    }
  }, []);

  // Function to handle tab change and update the URL hash
  const handleTabChange = (tabName) => {
    setActive(tabName);
    window.location.hash = `#/${tabName.toLowerCase()}`; // Set the hash in the URL
  };

  const menuItems = [
    {
      name: "Dashboard",
      activeIcon: dashboardActive,
      inactiveIcon: dashboardInactive,
    },
    {
      name: "Enrollment",
      activeIcon: enrollmentActive,
      inactiveIcon: enrollmentInactive,
    },
    { name: "Folder", activeIcon: folderActive, inactiveIcon: folderInactive },
    {
      name: "Profile",
      activeIcon: profileActive,
      inactiveIcon: profileInactive,
    },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Function to handle logout confirmation
  const handleLogoutConfirm = () => {
    setIsModalOpen(false);
    navigate("/"); // Redirect to the home page
  };

  // Function to handle logout cancel
  const handleLogoutCancel = () => {
    setIsModalOpen(false); // Close the modal if canceled
  };

  // Function to render the active component dynamically
  const renderActiveComponent = () => {
    switch (active) {
      case "Dashboard":
        return <Home />;
      case "Enrollment":
        return <Enrollment />;
      case "Folder":
        return <Folder />;
      case "Profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-[100vh]">
      {/* Sidebar */}
      <Card
        className={`h-full w-60.5 transition-transform transform fixed top-0 left-0 z-20
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0 lg:block 
    rounded-none border-r border-gray-300 bg-white shadow-lg`}
      >
        {/* Sidebar Close Button */}
        <div className="absolute top-4 right-4 z-30 cursor-pointer lg:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        {/* Logo */}
        <div className="sticky top-0 pt-6 pb-4 mb-2">
          <img src={logo} className="w-30 h-30 mx-auto" />
        </div>

        {/* Sidebar Menu */}
        <div className="overflow-y-auto overflow-x-hidden mt-4  flex-1">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleTabChange(item.name)} // Set the active component
              className={`cursor-pointer flex items-center w-full py-4 mb-1.5 pl-3 relative left-4 transition-all duration-200 ${
                active === item.name
                  ? "bg-[#B82A2A] text-white"
                  : "hover:bg-gray-200"
              } ${
                active === item.name
                  ? "rounded-tl-[30px] rounded-bl-[30px]"
                  : "rounded-tl-[30px] rounded-bl-[30px]"
              }`}
              style={{
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
              }}
            >
              <div>
                <img
                  src={
                    active === item.name ? item.activeIcon : item.inactiveIcon
                  }
                  className="w-5 relative left-2.5"
                />
              </div>
              <h1 className="ml-2 relative left-4 font-bold">{item.name}</h1>{" "}
              {/* Apply font-inter here */}
            </div>
          ))}

          {/* Logout Button */}
          <div className="w-full border-t p-2 mt-25 border-[#701919]">
            <div
              onClick={() => setIsModalOpen(true)} // Open modal when clicked
              className="cursor-pointer flex items-center py-5 rounded-[10px] px-12 hover:bg-gray-200 mt-2"
            >
              <ListItemPrefix>
                <img src={logoutIcon} className="h-6 w-6" />
              </ListItemPrefix>
              <h1 className="font-bold">Logout</h1>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content Area */}
      <div
        className={`flex-1 overflow-y-auto ${
          isSidebarOpen ? "ml-0" : "lg:ml-60"
        }`}
      >
        {/* Header Navbar */}
        <div
          className="flex items-center justify-between bg-cover p-4 border border-gray-300 shadow-md z-10 fixed w-full top-0 left-0"
          style={{ backgroundImage: `url(${navbarBG})` }} // Apply the background image here
        >
          {/* Hamburger Icon */}
          <button onClick={toggleSidebar} className="lg:hidden">
            <Bars3Icon className="h-9 w-9 text-white" />
          </button>
          <div className="flex-1"></div>

          <div className="flex items-center space-x-4">
            {/* Bell Icon */}
            <div className="relative">
              <div className="cursor-pointer bg-gray-200 p-2 rounded-full">
                <BellIcon className="h-6 w-6 text-[#B82A2A]" />
              </div>
              <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 animate-pulse rounded-full"></div>
            </div>

            {/* Name and Profile Image */}
            <div className="flex flex-col items-end text-white">
              <h1 className="text-white font-semibold"> Adrian Say</h1>
              <p className="text-white text-sm">Student</p>
            </div>
            <div className="p-2 rounded-full">
              <img
                src={profile}
                alt="Profile"
                className="h-11 w-11 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="p-4 bg-gray-100 pt-5 mt-23">
          {renderActiveComponent()}
        </div>
      </div>
      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-30">
          <div className="bg-white p-6 text-center justify-center rounded-[23px] shadow-lg w-96">
            <img
              className="mx-auto block relative top-[-60px]"
              src={sadImg}
              alt="Sad Image"
            />
            <Typography className="text-2xl py-4 text-[#691717] relative top-[-70px] border-b border-[#69171780] font-bold mb-4">
              Are you sure you want to logout?
            </Typography>
            <div className="flex justify-between gap-4 mt-[-60px]">
              <button
                onClick={handleLogoutConfirm}
                className="w-full bg-[#8B2020] shadow-md text-white rounded-[15px] cursor-pointer hover:bg-red-600"
              >
                yes
              </button>
              <button
                onClick={handleLogoutCancel}
                className="w-full h-10 bg-[#FFC729] text-white shadow-md rounded-[14px] cursor-pointer hover:bg-gray-400"
              >
                no
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentSidebar;
