import React, { useState } from "react";
import Filipino from "../EnrollmentCategory/Filipino";
import Foreigner from "../EnrollmentCategory/Foreigner";

function Enrollment() {
  const [userType, setUserType] = useState("Filipino");
  const [activeTab, setActiveTab] = useState("Filipino");

  React.useEffect(() => {
    setActiveTab(userType);
  }, [userType]);

  return (
    <div>
      {/* Tab Navigation */}
      <div
        className="flex mb-3 gap-8 p-4 rounded-md"
        style={{ background: "rgba(0, 0, 0, 0.1)" }}
      >
        <button
          className={`${
            activeTab === "Filipino"
              ? "text-[#B82A2A] border-b-4 border-[#B82A2A]"
              : "text-gray-400 cursor-not-allowed"
          } text-xl font-semibold py-2 px-4 transition-colors duration-300`}
          disabled={userType !== "Filipino"}
        >
          Filipino
        </button>

        <button
          className={`${
            activeTab === "Foreigner"
              ? "text-[#B82A2A] border-b-4 border-[#B82A2A]"
              : "text-gray-400 cursor-not-allowed"
          } text-xl font-semibold py-2 px-4 transition-colors duration-300`}
          disabled={userType !== "Foreigner"}
        >
          Foreigner
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Filipino" && <Filipino />}
        {activeTab === "Foreigner" && <Foreigner />}
      </div>
    </div>
  );
}

export default Enrollment;
