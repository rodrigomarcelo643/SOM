import React, { useState } from "react";
import ProfileTab from "../ProfilePages/ProfileTab";

function Profile() {
  const [activeTab, setActiveTab] = useState("Personal");

  const currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };

  const tabs = [
    "Personal",
    "Contact",
    "Family",
    "Address",
    "Education",
    "Account",
  ];

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
        <ProfileTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          currentDate={currentDate}
        />
      </div>
    </div>
  );
}

export default Profile;
