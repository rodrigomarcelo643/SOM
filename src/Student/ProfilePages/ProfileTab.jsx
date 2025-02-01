import React, { useState, useEffect, useRef } from "react";
import ProfilePic from "../../assets/profile.jpg";
import seeIcon from "../../assets/User.png";
import uploadIcon from "../../assets/upload.png";
import { FaSave } from "react-icons/fa";
import edit from "../../assets/edit.png";

function ProfileTab({ activeTab, setActiveTab, currentDate }) {
  const [gender, setGender] = useState("Male"); // Default to Male
  const [citizenship, setCitizenship] = useState("Filipino"); // Default to Filipino
  const [country, setCountry] = useState(""); // Default empty, will show when Foreigner is selected
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle the dropdown
  const [isEditing, setIsEditing] = useState(false); // State to control edit mode
  const dropdownRef = useRef(null); // Ref for the dropdown
  const profilePicRef = useRef(null); // Ref for the profile picture

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profilePicRef.current.contains(event.target) &&
        isEditing // Close dropdown only when not in edit mode
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEditing]);

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
      <div className="text-gray-700">
        {/* Top Right Edit Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-2 rounded-md transition duration-300 flex items-center space-x-2"
          >
            {/* Edit button: Show the image in a circle with a gray background */}
            {isEditing ? (
              <span className="bg-[#8E2525] cursor-pointer text-white py-1.5 px-7 rounded-lg hover:bg-[#e28e8e]">
                Save
              </span>
            ) : (
              <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <img src={edit} alt="Edit" className="w-5 h-5" />{" "}
                {/* Edit icon */}
              </span>
            )}
          </button>
        </div>

        {/* Profile Picture */}
        <div
          ref={profilePicRef} // Ref for the profile picture container
          className="w-24 h-24 mb-5 mt-[-30px] bg-gray-200 rounded-full overflow-hidden cursor-pointer"
          onClick={() => isEditing && setShowDropdown(!showDropdown)} // Toggle dropdown visibility only in edit mode
        >
          <img
            src={ProfilePic} // Placeholder image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dropdown menu for profile actions */}
        {showDropdown && isEditing && (
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
                  disabled={!isEditing} // Disabled when not in edit mode
                />
              </div>
              <div className="w-[140px]">
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                  disabled={!isEditing} // Disabled when not in edit mode
                />
              </div>
              <div className="w-[140px]">
                <label className="block mb-2">MI</label>
                <input
                  type="text"
                  placeholder="MI"
                  className="p-2 border border-gray-300 rounded-md w-full"
                  disabled={!isEditing} // Disabled when not in edit mode
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
                  disabled={!isEditing} // Disabled when not in edit mode
                >
                  <option disabled>MM</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[80px]">
                <select
                  className="p-2 border border-gray-300 rounded-md w-full"
                  defaultValue={currentDate.day}
                  disabled={!isEditing} // Disabled when not in edit mode
                >
                  <option disabled>DD</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[80px]">
                <select
                  className="p-2 border border-gray-300 rounded-md w-full"
                  defaultValue={currentDate.year}
                  disabled={!isEditing} // Disabled when not in edit mode
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
            <div className="flex space-x-6 mt-[-10px] lg:flex sm:overflow-hidden ">
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
                      if (option !== "Foreigner") setCountry("");
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
                  disabled={!isEditing} // Disabled when not in edit mode
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
    <div className="w-full p-6 bg-transparent text-gray-700 rounded-md shadow-md">
      {tabContents[activeTab]}
    </div>
  );
}

export default ProfileTab;
