import React, { useState } from "react";

function TOR({ student, handleBack }) {
  const [signatureOption, setSignatureOption] = useState(""); // Initially no signature option selected
  const [signatureFile, setSignatureFile] = useState(null); // For uploaded signature
  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility
  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const [drawnSignature, setDrawnSignature] = useState(null); // For storing drawn signature

  const handleSignatureChange = (event) => {
    setSignatureFile(event.target.files[0]); // Store uploaded file
  };

  const handleSignatureOptionChange = (option) => {
    setSignatureOption(option); // Set the selected signature option (upload or draw)
    setShowDropdown(false); // Close the dropdown when an option is selected
  };

  const handleDrawSignature = (signature) => {
    setDrawnSignature(signature); // Store drawn signature
    setShowModal(false); // Close the modal after saving the signature
  };

  const handleFocus = () => {
    setShowDropdown(true); // Show dropdown on input focus
  };

  const closeDropdown = () => {
    setShowDropdown(false); // Close dropdown when clicked outside
  };

  return (
    <div className="rounded-lg">
      {/* Table for TOR Details */}

      <div className="mb-6">
        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={handleBack}
            className="bg-blue-500 relative top-[-30px] text-white ounded-md hover:bg-blue-700"
          >
            back
          </button>
        </div>

        <table className="min-w-full border p-2 border-collapse">
          <thead className=" text-left">
            <tr>
              <th className="py-3 px-2 ">First Year</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>SY 24-25</th>
            </tr>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Course Code</th>
              <th className="px-4 py-2 border">Course Title</th>
              <th className="px-4 py-2 border">Term</th>
              <th className="px-4 py-2 border">Lec</th>
              <th className="px-4 py-2 border">Lab</th>
              <th className="px-4 py-2 border">No. of Units</th>
              <th className="px-4 py-2 border">Hours per Year</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Final Grade</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="border">
                <td className="px-4 py-2 border">HES 066</td>
                <td className="px-4 py-2 border">Gross Anatomy</td>
                <td className="px-4 py-2 border">Yearly</td>
                <td className="px-4 py-2 border">6</td>
                <td className="px-4 py-2 border">12</td>
                <td className="px-4 py-2 border">18</td>
                <td className="px-4 py-2 border">324</td>
                <td className="px-4 py-2 border">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-md">
                    Evaluated
                  </span>
                </td>
                <td className="px-4 py-2">95</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Units Section */}
        <div className="mt-4 text-right">
          <span className="font-semibold text-lg">Total No. of Units: </span>
          <span className="text-lg">18</span>
        </div>
      </div>

      {/* Evaluator Details Section */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Evaluated By:</h4>
        <table className="min-w-full border-collapse">
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Enter Evaluator Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                />
              </td>
              <td className="px-4 py-2">
                <div className="relative">
                  <label className="text-sm">Select Signature Option:</label>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    placeholder="Click to add signature"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                  />

                  {/* Dropdown Menu for Signature Options */}
                  {showDropdown && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 mt-1 shadow-lg">
                      <div
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSignatureOptionChange("upload")}
                      >
                        Upload Signature
                      </div>
                      <div
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSignatureOptionChange("draw")}
                      >
                        Draw Signature
                      </div>
                    </div>
                  )}
                </div>

                {/* Upload Signature */}
                {signatureOption === "upload" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium">
                      Upload Signature
                    </label>
                    <input
                      type="file"
                      onChange={handleSignatureChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                    />
                    {signatureFile && (
                      <div className="mt-2 text-sm text-gray-600">
                        <strong>Uploaded Signature:</strong>{" "}
                        {signatureFile.name}
                      </div>
                    )}
                  </div>
                )}

                {/* Draw Signature */}
                {signatureOption === "draw" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium">
                      Draw Signature
                    </label>
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-1"
                    >
                      Open Drawing Canvas
                    </button>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal for Drawing Signature */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h4 className="text-xl mb-4">Draw Signature</h4>
            <div className="border border-gray-300 w-64 h-32 mb-4">
              <p className="text-sm text-center text-gray-500">
                Canvas Placeholder
              </p>
            </div>
            <button
              onClick={() =>
                handleDrawSignature("Drawn Signature Image or Data")
              }
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Save Signature
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TOR;
