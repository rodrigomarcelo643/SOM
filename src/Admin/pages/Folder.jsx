import React, { useState } from "react";
import cloud from "../../assets/cloud.png";
import pdfIcon from "../../assets/png.png";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from "react-icons/ai";

function Folder() {
  const [uploadedFiles, setUploadedFiles] = useState({
    "2 Photocopies of NSO Birth Certificates": [
      { name: "Birth Certificate_1.png" },
      { name: "Birth Certificate_2.png" },
    ],
    "Good Moral (from the dean 1 copy & from the professor 1 copy)": [
      { name: "Good Moral_1.png" },
      { name: "Good Moral_2.png" },
    ],
  });
  const [editing, setEditing] = useState({});

  const requiredDocuments = [
    "2 Photocopies of NSO Birth Certificates",
    "Good Moral (from the dean 1 copy & from the professor 1 copy)",
    "2 Photocopies of BS Diploma or Certificate Expected Date of Graduation from the Dean",
    "Original Copy of NMAT Result (Percentile rank = 40%)",
    "2pcs 2 x 2 picture",
    "Photocopy of Residence Certificate (Cedula)",
    "Certificate of Grade Point Average or Grade Weighted Average (GWA)",
    "Undertaking with waiver, release and Quit claim *NMAT & Failed Subjects",
    "Physical examination report from University Clinic",
    "School of Medicine Retention Policy & Grading System Effective SY 2021-2022",
  ];

  const handleDelete = (docTitle, fileIndex) => {
    setUploadedFiles((prevFiles) => {
      const newFiles = { ...prevFiles };
      newFiles[docTitle].splice(fileIndex, 1);
      if (newFiles[docTitle].length === 0) delete newFiles[docTitle];
      return { ...newFiles };
    });
  };

  const toggleEdit = (docTitle) => {
    setEditing((prevEditing) => ({
      ...prevEditing,
      [docTitle]: !prevEditing[docTitle],
    }));
  };

  return (
    <div>
      <div className="flex items-center mt-5 pb-2">
        <h2 className="text-base text-gray-700 md:text-lg whitespace-nowrap">
          Attached Files
        </h2>
        <div className="flex-1 border-b border-gray-400 ml-2 md:ml-4 w-16 md:w-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
        {requiredDocuments.map((docTitle, index) => (
          <div
            key={index}
            className="p-4 bg-[#F8F8F8] border border-gray-300 rounded-[17px] shadow-sm w-full relative"
          >
            {/* Container for Title and Edit button */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
              <h1 className="text-[16px] mb-4 mt-8 font-bold text-gray-700 flex-1">
                {docTitle}
              </h1>
              {/* Edit button fixed to the right */}
              <button
                onClick={() => toggleEdit(docTitle)}
                className="absolute right-4 top-4 text-[#B82A2A] hover:text-[#A72A2A] flex items-center"
              >
                {editing[docTitle] ? (
                  <AiOutlineSave className="mr-1" />
                ) : (
                  <AiOutlineEdit className="mr-1" />
                )}{" "}
                {editing[docTitle] ? "Save" : "Edit"}
              </button>
            </div>
            {uploadedFiles[docTitle] ? (
              uploadedFiles[docTitle].map((file, fileIndex) => (
                <div
                  key={fileIndex}
                  className="flex justify-between items-center w-full mb-2"
                >
                  <div className="flex items-center">
                    {file.name.endsWith(".png") && (
                      <img
                        src={pdfIcon}
                        alt="PDF Icon"
                        className="w-6 h-6 mr-2"
                      />
                    )}
                    <p className="font-bold text-gray-700">{file.name}</p>
                  </div>
                  {editing[docTitle] && (
                    <button
                      onClick={() => handleDelete(docTitle, fileIndex)}
                      className="text-red-500 flex items-center text-sm hover:text-red-700"
                    >
                      <AiOutlineDelete className="mr-1" /> Delete
                    </button>
                  )}
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center mt-10 mb-5">
                <img src={cloud} alt="Cloud Upload" className="mb-4" />
                <p className="font-bold text-gray-700">No uploads yet</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Folder;
