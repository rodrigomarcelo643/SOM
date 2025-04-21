import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/msis_logo.png";
import { useNavigate } from "react-router-dom";

const LoginNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("home");

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setMenuOpen(false); // Close menu after clicking a tab
  };
  function navigateAdmin() {
    navigate("/Admin");
  }

  return (
    <nav className="bg-transparent py-9.5 px-8 flex justify-between items-center fixed w-full top-0 left-0 z-10 ">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <span className="text-[18px] lg:block md:hidden text-white">
          School of Medicine
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-10 ">
        {["home", "faq's", "announcements"].map((tab) => (
          <div key={tab} className="relative flex flex-col items-center ml-3 ">
            <a
              href={`#${tab}`}
              onClick={() => handleTabChange(tab)}
              className={`text-[17px] text-white transition-all duration-300 ease-in-out ${
                currentTab === tab ? "font-bold" : ""
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </a>
            {/* Active Indicator */}
            {currentTab === tab && (
              <div className="circle-animation absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
            )}
          </div>
        ))}
        {/* Admin Button with Space */}
        <button
          onClick={navigateAdmin}
          className="border border-white text-white px-5 mr-40 py-.9 cursor-pointer rounded-md transition-all duration-300 hover:bg-white hover:text-[#8E2525]"
        >
          Admin
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FaTimes className="w-10 h-10" />
        ) : (
          <FaBars className="w-10 h-10" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-[#8E2525] py-8 mt-7 px-8 fixed flex flex-col items-start space-y-4 absolute top-16 left-0 w-full z-10`}
      >
        {["home", "faq", "announcements"].map((tab) => (
          <a
            key={tab}
            href={`#${tab}`}
            onClick={() => handleTabChange(tab)}
            className="text-lg text-white hover:text-gray-300"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </a>
        ))}
        {/* Mobile Admin Button */}
        <button
          onClick={navigateAdmin}
          className="border border-white text-white px-5 py-2 rounded-md transition-all duration-300 hover:bg-white hover:text-[#8E2525]"
        >
          Admin
        </button>
      </div>

      <style jsx>{`
        .circle-animation {
          width: 30px;
          height: 2px;
          background-color: white;
          border-radius: 2%;
          animation: circleGrow 0.3s ease-in-out;
        }

        @keyframes circleGrow {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </nav>
  );
};

export default LoginNavbar;
