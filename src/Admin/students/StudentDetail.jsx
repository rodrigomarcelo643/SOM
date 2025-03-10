import React, { useState } from "react";
import { FaFileAlt, FaRegFilePdf } from "react-icons/fa"; // Importing icons
import TOR from "./TOR"; // Import TOR component
import UploadedDocuments from "./UploadedDocuments"; // Import UploadedDocuments component

function StudentDetail({ student }) {
  // State to control which section is displayed
  const [activeSection, setActiveSection] = useState("details");

  // Handle redirection to Uploaded Documents section
  const handleShowUploadedDocuments = () => {
    setActiveSection("uploadedDocuments");
  };

  // Handle redirection to TOR section
  const handleShowTOR = () => {
    setActiveSection("tor");
  };

  // Handle back button click (return to Student Detail)
  const handleBack = () => {
    setActiveSection("details");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg  mx-auto">
      {activeSection === "details" && (
        <>
          <h3 className="text-2xl font-semibold border-b border-gray-300 mb-4">
            Student Details
          </h3>
          <div className="flex space-x-6">
            {/* Left Box - Basic Student Information */}
            <div className="w-1/2">
              <p>
                <strong>First Name:</strong> {student.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {student.lastName}
              </p>
              <p>
                <strong>Email:</strong> {student.email}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {student.status === "Completed" ? "Evaluated" : "Pending"}
              </p>
            </div>
            {/* Right Box - Enrollment Info */}
            <div className="w-1/2">
              <p>
                <strong>Enrolled:</strong> {student.enrolled ? "Yes" : "No"}
              </p>
            </div>
          </div>

          {/* Uploaded Documents and TOR Section */}
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Uploaded Documents Box */}
              <div
                className="p-6 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-blue-50 transition duration-200 ease-in-out transform hover:scale-105"
                onClick={handleShowUploadedDocuments}
              >
                <div className="flex items-center space-x-4">
                  <FaFileAlt className="text-blue-500 text-3xl" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Uploaded Documents
                    </h4>
                    <p className="text-gray-600">
                      View your uploaded documents
                    </p>
                  </div>
                </div>
              </div>

              {/* TOR Box */}
              <div
                className="p-6 border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-blue-50 transition duration-200 ease-in-out transform hover:scale-105"
                onClick={handleShowTOR}
              >
                <div className="flex items-center space-x-4">
                  <FaRegFilePdf className="text-red-500 text-3xl" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      Transcript of Records (TOR)
                    </h4>
                    <p className="text-gray-600">
                      View your Transcript of Records
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeSection === "uploadedDocuments" && (
        <UploadedDocuments student={student} handleBack={handleBack} />
      )}

      {activeSection === "tor" && (
        <TOR student={student} handleBack={handleBack} />
      )}
    </div>
  );
}

export default StudentDetail;
