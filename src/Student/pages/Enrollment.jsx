import React, { useState } from "react";
import cloud from "../../assets/cloud.png";

function Enrollment() {
  const [activeTab, setActiveTab] = useState("Filipino");

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex mb-3 gap-8">
        <button
          onClick={() => setActiveTab("Filipino")}
          className={`${
            activeTab === "Filipino"
              ? "text-[#B82A2A] border-b-4 border-[#B82A2A]"
              : "text-gray-600 hover:text-[#B82A2A]"
          } text-xl font-semibold py-2 px-4 transition-colors duration-300`}
        >
          Filipino
        </button>
        <button
          onClick={() => setActiveTab("Foreigner")}
          className={`${
            activeTab === "Foreigner"
              ? "text-[#B82A2A] border-b-4 border-[#B82A2A]"
              : "text-gray-600 hover:text-[#B82A2A]"
          } text-xl font-semibold py-2 px-4 transition-colors duration-300`}
        >
          Foreigner
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Filipino" ? (
          <div>
            {/* First Box (100% width) */}
            <div className="mt-6 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
              <img src={cloud} alt="Cloud Upload" className="mb-4" />
              <p className="mt-2">Drag Files to Upload</p>
              <p className="mt-2 text-gray-400 text-[12px]">
                <span className="text-gray-300">━━━━━</span> or{" "}
                <span className="text-gray-300">━━━━━</span>
              </p>

              <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
                Browse
              </button>
              <h1 className="mt-4">2 Photocopies of NSO Birth Certificates</h1>
            </div>

            {/* Two Boxes (50% each) */}
            <div className="flex gap-3 mt-6">
              <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
                <img src={cloud} alt="Cloud Upload" className="mb-4" />
                <p className="mt-2">Drag Files to Upload</p>
                <p className="mt-2 text-gray-400 text-[12px]">
                  <span className="text-gray-300">━━━━━</span> or{" "}
                  <span className="text-gray-300">━━━━━</span>
                </p>

                <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
                  Browse
                </button>
                <h1 className="mt-4">
                  2 Photocopies of NSO Birth Certificates
                </h1>
              </div>
              <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
                <img src={cloud} alt="Cloud Upload" className="mb-4" />
                <p className="mt-2">Drag Files to Upload</p>
                <p className="mt-2 text-gray-400 text-[12px]">
                  <span className="text-gray-300">━━━━━</span> or{" "}
                  <span className="text-gray-300">━━━━━</span>
                </p>

                <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
                  Browse
                </button>
                <h1 className="mt-4">
                  2 Photocopies of NSO Birth Certificates
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold">Foreigner Enrollment</h2>
            <p className="text-lg mt-4">Content for foreign students...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Enrollment;
