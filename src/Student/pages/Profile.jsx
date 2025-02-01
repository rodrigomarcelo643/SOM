import React, { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("Personal");
  const [gender, setGender] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [country, setCountry] = useState("");

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
      <div className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/100" // Placeholder image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-4 w-full">
            {/* Name Inputs */}
            <div className="flex space-x-4">
              <div className="w-1/3">
                <label className="block">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="w-1/3">
                <label className="block">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="w-1/3">
                <label className="block">Middle Initial</label>
                <input
                  type="text"
                  placeholder="MI"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
            {/* Birthdate Inputs */}
            <div className="flex space-x-4">
              <div className="w-1/4">
                <label className="block">Month</label>
                <select
                  className="p-2 border border-gray-300 rounded-md w-full"
                  defaultValue="MM"
                >
                  <option disabled>MM</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/4">
                <label className="block">Day</label>
                <select
                  className="p-2 border border-gray-300 rounded-md w-full"
                  defaultValue="DD"
                >
                  <option disabled>DD</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/4">
                <label className="block">Year</label>
                <input
                  type="number"
                  placeholder="YY"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
            {/* Gender Radio Buttons */}
            <div className="flex space-x-6 mt-4">
              {["Male", "Female", "Prefer not to say"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={gender === option}
                    onChange={() => setGender(option)}
                    className="w-4 h-4"
                  />
                  <span
                    className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ${
                      gender === option ? "bg-[#BA3131]" : "bg-transparent"
                    }`}
                  >
                    {option[0]}
                  </span>
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {/* Citizenship Radio Buttons */}
            <div className="flex space-x-6 mt-4">
              {["Filipino", "Foreigner"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="citizenship"
                    value={option}
                    checked={citizenship === option}
                    onChange={() => {
                      setCitizenship(option);
                      if (option !== "Foreigner") setCountry(""); // Reset country input when not Foreigner
                    }}
                    className="w-4 h-4"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {/* If Foreigner is selected, show input for country */}
            {citizenship === "Foreigner" && (
              <div className="mt-4">
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
      <div className="w-full lg:w-1/4 bg-gray-100 py-3 px-6 lg:px-0 shadow-md mb-4 lg:mb-0 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <ul className="flex space-x-4 lg:flex-col lg:space-x-0 overflow-x-auto">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer p-3 mb-1 text-lg transition-colors duration-300
                ${
                  activeTab === tab
                    ? "bg-[#B82A2A] text-white lg:border-b-0 border-b-4 border-[#B82A2A]"
                    : "text-gray-600 hover:text-[#B82A2A]"
                } 
                lg:text-lg md:text-sm sm:text-xs`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-3/4 p-6 lg:px-6 pr-0">
        <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
        <div className="p-6 bg-[#B82A2A] text-white rounded-md shadow-md">
          {tabContents[activeTab]}
        </div>
      </div>
    </div>
  );
}

export default Profile;
