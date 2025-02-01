import React, { useState } from "react";
import cloud from "../../assets/cloud.png";
import Filipino from "../EnrollmentCategory/Filipino";
import Foreigner from "../EnrollmentCategory/Foreigner";

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
      <div>{activeTab === "Filipino" ? <Filipino /> : <Foreigner />}</div>
    </div>
  );
}

export default Enrollment;
