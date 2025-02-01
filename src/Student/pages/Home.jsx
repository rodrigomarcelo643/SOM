import React, { useState, useEffect } from "react";
import { FaBullhorn, FaStickyNote } from "react-icons/fa";

const fetchAnnouncements = (year) => {};

function Home() {
  const [year2Announcements, setYear2Announcements] = useState([]);

  useEffect(() => {
    // Simulate fetching Year 2 data
    setYear2Announcements(fetchAnnouncements("Year2"));
  }, []);

  return (
    <div className="p-2 ">
      <div className="mt-8 space-y-6">
        {/* Pinned Announcements */}
        <div className="bg-white py-6 px-3 rounded-lg shadow-lg flex items-center space-x-4 border border-gray-300">
          <FaStickyNote className="text-3xl text-[#8D2525]" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Pinned Announcements
            </h2>
            <p className="text-lg text-gray-600">No Pinned Announcements Yet</p>
          </div>
        </div>

        {/* Year 2 Announcements */}
        <div>
          <h2 className="text-xl font-semibold text-[#8D2525] flex items-center">
            <FaBullhorn className="mr-2 text-[#8D2525]" />
            Year 2 Announcements
          </h2>

          {/* Check if there are announcements */}
          <p className="text-lg text-gray-500 mt-4">No Announcements Yet</p>
        </div>

        {/* Resources Title */}
        <h1 className="text-xl text-gray-800 font-bold mt-6">Resources</h1>

        {/* Resources Section */}
        <div className="bg-white py-6 px-3 rounded-lg shadow-lg border border-gray-300 mt-2">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:text-left">
            {/* Left side: Title */}
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
              <h2 className="text-[16px] font-bold text-gray-800">
                SCHOOL CALENDAR
              </h2>
              <p className="text-gray-600 text-[13px] mt-2">
                AY 2024 - 2025 SCHOOL OF MEDICINE Y1 & Y2
              </p>
            </div>

            {/* Center: Date Uploaded */}
            <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
              <h3 className="text-md font-semibold text-gray-800">
                Date Uploaded
              </h3>
              <p className="text-gray-500 text-[12px] mt-2">May 15, 2025</p>
            </div>

            {/* Right side: Download Button */}
            <div className="w-full sm:w-1/3 text-center sm:text-right">
              <button className="px-6 py-2 bg-[#8D2525] text-white rounded-md hover:bg-[#A63F3F] transition-all cursor-pointer">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Resource 2 */}
        <div className="bg-white py-6 px-3 rounded-lg shadow-lg border border-gray-300 mt-[-15px]">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:text-left">
            {/* Left side: Title */}
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
              <h2 className="text-[16px] font-bold text-gray-800">
                MEDICAL REFERENCE GUIDE
              </h2>
              <p className="text-gray-600 text-[13px] mt-2">
                AY 2024 - 2025 SCHOOL OF MEDICINE Y1 & Y2
              </p>
            </div>

            {/* Center: Date Uploaded */}
            <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
              <h3 className="text-md font-semibold text-gray-800">
                Date Uploaded
              </h3>
              <p className="text-gray-500 text-[12px] mt-2">May 10, 2025</p>
            </div>

            {/* Right side: Download Button */}
            <div className="w-full sm:w-1/3 text-center sm:text-right">
              <button className="px-6 py-2 bg-[#8D2525] text-white rounded-md hover:bg-[#A63F3F] transition-all cursor-pointer">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Resource 3 */}
        <div className="bg-white py-6 px-3 rounded-lg shadow-lg border border-gray-300 mt-[-15px]">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:text-left">
            {/* Left side: Title */}
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
              <h2 className="text-[16px] font-bold text-gray-800">
                MEDICAL PROCEDURES HANDBOOK
              </h2>
              <p className="text-gray-600 text-[13px] mt-2">
                AY 2024 - 2025 SCHOOL OF MEDICINE Y1 & Y2
              </p>
            </div>

            {/* Center: Date Uploaded */}
            <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
              <h3 className="text-md font-semibold text-gray-800">
                Date Uploaded
              </h3>
              <p className="text-gray-500 text-[12px] mt-2">May 8, 2025</p>
            </div>

            {/* Right side: Download Button */}
            <div className="w-full sm:w-1/3 text-center sm:text-right">
              <button className="px-6 py-2 bg-[#8D2525] text-white rounded-md hover:bg-[#A63F3F] transition-all cursor-pointer">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
