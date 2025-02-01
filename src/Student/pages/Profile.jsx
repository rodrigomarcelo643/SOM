import React, { useState, useEffect, useRef } from "react";
import ProfilePic from "../../assets/profile.jpg";
import seeIcon from "../../assets/User.png";
import uploadIcon from "../../assets/upload.png";
function Profile() {
  const [activeTab, setActiveTab] = useState("Personal");
  const [gender, setGender] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [country, setCountry] = useState("");
  const [currentDate, setCurrentDate] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1, // Month is 0-based in JavaScript, so add 1
    year: new Date().getFullYear(),
  });

  const [showDropdown, setShowDropdown] = useState(false); // State to toggle the dropdown
  const dropdownRef = useRef(null); // Ref for the dropdown
  const profilePicRef = useRef(null); // Ref for the profile picture

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profilePicRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const tabs = [
    "Personal",
    "Contact",
    "Family",
    "Address",
    "Education",
    "Account",
  ];

  const tabContents = {
    Personal: (
      <div className=" text-gray-700">
        {/* Profile Picture */}
        <div
          ref={profilePicRef} // Ref for the profile picture container
          className="w-24 h-24 mb-5 mt-[-30px] bg-gray-200 rounded-full overflow-hidden cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
        >
          <img
            src={ProfilePic} // Placeholder image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dropdown menu for profile actions */}
        {showDropdown && (
          <div
            ref={dropdownRef} // Ref for the dropdown container
            className="absolute bg-white shadow-lg mt-[-30px] ml-[-40px] rounded-lg w-64 z-10"
          >
            <ul className="text-gray-700">
              <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                {/* Image before the text */}
                <img
                  src={seeIcon} // Replace with your image path
                  alt="See Profile"
                  className="w-6 h-6 mr-2"
                />
                See Profile Picture
              </li>
              <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                {/* Image before the text */}
                <img
                  src={uploadIcon} // Replace with your image path
                  alt="Upload Profile"
                  className="w-6 h-6 mr-2"
                />
                Upload Profile Picture
              </li>
            </ul>
          </div>
        )}

        {/* Rest of the Personal tab content */}
        <div className="flex items-center space-x-6 mt-10">
          <div className="flex flex-col space-y-4 w-full">
            {/* Name Inputs */}
            <div className="flex space-x-4">
              <div className="w-[140px]">
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="w-[140px]">
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="w-[140px]">
                <label className="block mb-2">MI</label>
                <input
                  type="text"
                  placeholder="MI"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
            <p>Birthdate </p>
            {/* Birthdate Inputs */}
            <div className="flex space-x-4 mt-[-10px]">
              <div className="w-[80px]">
                <select
                  className="p-2 border border-gray-300 rounded-md w-full"
                  defaultValue={currentDate.month}
                >
                  <option disabled>MM</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[80px]">
                <select
                  className="p-2 border border-gray-300 rounded-md w-full"
                  defaultValue={currentDate.day}
                >
                  <option disabled>DD</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[80px]">
                <select
                  className="p-2 border border-gray-300 rounded-md w-full"
                  defaultValue={currentDate.year}
                >
                  <option disabled>YY</option>
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i} value={currentDate.year - i}>
                      {currentDate.year - i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p>Gender </p>
            {/* Gender Selection (Circle Instead of Radio) */}
            <div className="flex space-x-6 mt-[-10px] lg:flex md:block sm:block">
              {["Male", "Female", "Prefer not to say"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                      gender === option
                        ? "bg-[#BA3131] border-gray-300"
                        : "bg-transparent border-gray-300"
                    }`}
                    onClick={() => setGender(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <p>Citizenship </p>
            {/* Citizenship Circle Selection (Same Style as Gender) */}
            <div className="flex space-x-6 mt-[-10px]">
              {["Filipino", "Foreigner"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                      citizenship === option
                        ? "bg-[#BA3131] border-gray-300"
                        : "bg-transparent border-gray-300"
                    }`}
                    onClick={() => {
                      setCitizenship(option);
                      if (option !== "Foreigner") setCountry(""); // Reset country input when not Foreigner
                    }}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {/* If Foreigner is selected, show input for country */}
            {citizenship === "Foreigner" && (
              <div className="mt-[-10px]">
                <label className="block">Specify Country</label>
                <input
                  type="text"
                  placeholder="Specify Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    // Other tab contents would go here...
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar Tabs */}
      <div className="w-full sticky top-0 lg:w-1/4 bg-gray-100 py-3 px-6 lg:pr-0 lg:px-6 shadow-md mb-4 lg:mb-0 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <ul className="flex space-x-4 lg:flex-col lg:space-x-0 overflow-x-auto">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer p-3 mb-1 text-lg transition-colors duration-300
                ${
                  activeTab === tab
                    ? "bg-[#B82A2A] text-white lg:border-b-0 sm:rounded-2xl rounded-2xl lg:rounded-tl-[30px] lg:rounded-bl-[30px] border-b-4 border-[#B82A2A] pl-6"
                    : "text-gray-600 hover:text-[#B82A2A] sm:rounded-2xl rounded-2xl lg:rounded-tl-[30px] lg:rounded-bl-[30px] pl-6"
                } 
                lg:text-lg md:text-sm sm:text-xs`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-3/4 p-2 lg:px-6 pr-0 overflow-y-auto max-h-screen">
        <div className="p-6 bg-transparent text-gray-700 rounded-md shadow-md">
          {tabContents[activeTab]}
        </div>
      </div>
    </div>
  );
}

export default Profile;
