import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
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

function StudentSidebar() {
  const [active, setActive] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

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
    {
      name: "Folder",
      activeIcon: folderActive,
      inactiveIcon: folderInactive,
    },
    {
      name: "Profile",
      activeIcon: profileActive,
      inactiveIcon: profileInactive,
    },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Function to handle logout confirmation
  const handleLogoutConfirm = () => {
    setIsModalOpen(false); // Close the modal
    navigate("/"); // Navigate to home after confirming
  };

  // Function to handle logout cancel
  const handleLogoutCancel = () => {
    setIsModalOpen(false); // Close the modal if canceled
  };

  return (
    <div className="flex h-[100vh]">
      {/* Sidebar */}
      <Card
        className={`h-full w-60.5 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block absolute lg:relative z-10 overflow-y-auto fixed top-0 left-0 bottom-0 rounded-none border-r border-gray-300`}
      >
        {/* Sidebar Close Button */}
        <div className="absolute top-4 right-4 z-10 cursor-pointer lg:hidden">
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
        <List className="overflow-y-auto overflow-x-hidden mt-2 flex-1">
          {menuItems.map((item) => (
            <ListItem
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`cursor-pointer flex items-center w-full py-4 relative left-2 transition-all duration-200 ${
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
              }} // Remove border-radius on right side
            >
              <ListItemPrefix>
                <img
                  src={
                    active === item.name ? item.activeIcon : item.inactiveIcon
                  }
                  className="w-5 w-5 relative left-2.5"
                />
              </ListItemPrefix>
              <Typography className="ml-2 font-bold">{item.name}</Typography>
            </ListItem>
          ))}

          {/* Logout Button */}
          <div className="w-full border-t-2 mt-25 border-solid  ">
            <ListItem
              onClick={() => setIsModalOpen(true)} // Open modal when clicked
              className="cursor-pointer flex items-center py-5 px-12 hover:bg-gray-200 mt-2 "
            >
              <ListItemPrefix>
                <img src={logoutIcon} className="h-6 w-6" />
              </ListItemPrefix>
              <Typography className="font-bold hover:text-white">
                Logout
              </Typography>
            </ListItem>
          </div>
        </List>
      </Card>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Header Navbar */}
        <div className="flex items-center justify-between bg-white p-4 border border-gray-300 shadow-md shadow-black">
          {/* Hamburger Icon */}
          <button onClick={toggleSidebar} className="lg:hidden">
            <Bars3Icon className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex-1"></div>

          <div className="flex items-center space-x-4">
            {/* Bell Icon */}
            <div className="relative">
              <div className="bg-gray-200 p-2 rounded-full">
                <BellIcon className="h-6 w-6 text-[#B82A2A]" />
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>

            {/* Name and Profile Image */}
            <div className="flex flex-col items-start">
              <Typography className="text-gray-800 font-semibold">
                Adrian Say
              </Typography>
              <Typography className="text-gray-500 text-sm">Student</Typography>
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
        <div className="p-8 bg-gray-100">
          <Typography variant="h4">{active}</Typography>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <Typography className="text-lg font-bold mb-4">
              Are you sure you want to logout?
            </Typography>
            <div className="flex justify-between">
              <button
                onClick={handleLogoutCancel}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentSidebar;
