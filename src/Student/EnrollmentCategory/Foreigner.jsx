import React, { useState } from "react";
import cloud from "../../assets/cloud.png";

function Foreigner() {
  const [files, setFiles] = useState({
    file1: [],
    file2: [],
    file3: [],
    file4: [],
    file5: [],
    file6: [],
    file7: [],
    file8: [],
    file9: [],
    file10: [],
    file11: [],
  });

  const handleFileChange = (e, boxId) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles((prev) => ({
      ...prev,
      [boxId]: uploadedFiles,
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, boxId) => {
    e.preventDefault();
    const uploadedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => ({
      ...prev,
      [boxId]: uploadedFiles,
    }));
  };

  const renderFiles = (boxId) => {
    const uploadedFiles = files[boxId];
    if (uploadedFiles.length > 0) {
      return (
        <div className="mt-2 text-gray-500">
          {uploadedFiles.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  const isLimitExceeded = (boxId) => {
    if (boxId === "file1" || boxId === "file2" || boxId === "file3") {
      return files[boxId].length > 3; // For 3 copies
    }
    if (
      boxId === "file4" ||
      boxId === "file5" ||
      boxId === "file6" ||
      boxId === "file7" ||
      boxId === "file8" ||
      boxId === "file9" ||
      boxId === "file10"
    ) {
      return files[boxId].length > 2; // For 2 copies
    }
    return false;
  };

  return (
    <div>
      {/* Title */}
      <div className="flex items-center mt-10 pb-2">
        <h2 className="text-base text-gray-700 md:text-lg whitespace-nowrap">
          Attached the required files
        </h2>
        <div className="flex-1 border-b border-gray-400 ml-2 md:ml-4 w-16 md:w-auto"></div>
      </div>

      {/* Two Boxes (50% each) */}
      <div className="flex gap-3 mt-6">
        {/* Box 2 */}
        <div
          className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center"
          onDrop={(e) => handleDrop(e, "file1")}
          onDragOver={handleDragOver}
        >
          <img src={cloud} alt="Cloud Upload" className="mb-4" />
          <p className="mt-2 text-gray-600 font-bold sm:text-[6px] md:text-[15px] text-[10px] lg-text-[30px]">
            Drag Files to Upload
          </p>
          <p className="mt-2 text-gray-400 sm:text-[6px] md:text-[13px] text-[10px] lg-text-[15px]">
            <span className="text-gray-300">━━━━━</span> or{" "}
            <span className="text-gray-300">━━━━━</span>
          </p>
          <input
            type="file"
            className="hidden"
            id="file1"
            onChange={(e) => handleFileChange(e, "file1")}
          />
          <label
            htmlFor="file1"
            className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C] cursor-pointer"
          >
            Browse
          </label>
          <h1 className="mt-4 text-center  mb-5 text-sm sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            (3) copies of Official Transcript of Records, 1 copy original 2
            copies authenticated
          </h1>
          {isLimitExceeded("file1") && (
            <p className="text-red-500">
              You can only upload 3 files for this box
            </p>
          )}
          {renderFiles("file1")}
        </div>

        {/* Box 3 */}
        <div
          className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center"
          onDrop={(e) => handleDrop(e, "file2")}
          onDragOver={handleDragOver}
        >
          <img src={cloud} alt="Cloud Upload" className="mb-4" />
          <p className="mt-2 sm:text-[6px] font-bold text-gray-600 md:text-[15px] text-[10px] lg-text-[30px]">
            Drag Files to Upload
          </p>
          <p className="mt-2 text-gray-400 sm:text-[6px] md:text-[13px] text-[10px] lg-text-[15px]">
            <span className="text-gray-300">━━━━━</span> or{" "}
            <span className="text-gray-300">━━━━━</span>
          </p>
          <input
            type="file"
            className="hidden"
            id="file2"
            multiple
            onChange={(e) => handleFileChange(e, "file2")}
          />
          <label
            htmlFor="file2"
            className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C] cursor-pointer"
          >
            Browse
          </label>
          <h1 className="mt-4 text-center mb-5 text-sm sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            (2) copies of Good Moral (Original Copies) 1 from the dean & 1 from
            your professors
          </h1>
          {isLimitExceeded("file2") && (
            <p className="text-red-500">
              You can only upload 2 files for this box
            </p>
          )}
          {renderFiles("file2")}
        </div>
      </div>
      {/* Two Boxes (50% each) */}
      <div className="flex gap-3 mt-6">
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center">
          <img src={cloud} alt="Cloud Upload" className="mb-4" />
          <p className="mt-2 sm:text-[6px] font-bold text-gray-600  md:text-[15px] text-[10px] lg-text-[30px]">
            Drag Files to Upload
          </p>
          <p className="mt-2 text-gray-400 sm:text-[6px] md:text-[13px] text-[10px] lg-text-[15px]">
            <span className="text-gray-300">━━━━━</span> or{" "}
            <span className="text-gray-300">━━━━━</span>
          </p>

          <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
            Browse
          </button>
          <h1 className="mt-4 text-center text-sm  mb-5 sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            (2) copies of Good Moral (Original Copies) 1 from the dean & 1 from
            your professors
          </h1>
        </div>
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center">
          <img src={cloud} alt="Cloud Upload" className="mb-4" />
          <p className="mt-2 sm:text-[6px] font-bold text-gray-600  md:text-[15px] text-[10px] lg-text-[30px]">
            Drag Files to Upload
          </p>
          <p className="mt-2 text-gray-400 sm:text-[6px] md:text-[13px] text-[10px] lg-text-[15px]">
            <span className="text-gray-300">━━━━━</span> or{" "}
            <span className="text-gray-300">━━━━━</span>
          </p>
          <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
            Browse
          </button>
          <h1 className="mt-4 text-center text-sm  mb-5 sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            (3) copies of Diploma, 1 copy original & 2 copies authenticated
          </h1>
        </div>
      </div>
      {/* Two Boxes (50% each) */}
      <div className="flex gap-3 mt-6">
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center">
          <img src={cloud} alt="Cloud Upload" className="mb-4" />
          <p className="mt-2 sm:text-[6px] font-bold text-gray-600  md:text-[15px] text-[10px] lg-text-[30px]">
            Drag Files to Upload
          </p>
          <p className="mt-2 text-gray-400 sm:text-[6px] md:text-[13px] text-[10px] lg-text-[15px]">
            <span className="text-gray-300">━━━━━</span> or{" "}
            <span className="text-gray-300">━━━━━</span>
          </p>

          <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
            Browse
          </button>
          <h1 className="mt-4 text-center text-sm sm:text-base  mb-5 text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            (2) copies of Police Clearance, Visa, Passport
          </h1>
        </div>
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center">
          <img src={cloud} alt="Cloud Upload" className="mb-4" />
          <p className="mt-2 sm:text-[6px] font-bold text-gray-600  md:text-[15px] text-[10px] lg-text-[30px]">
            Drag Files to Upload
          </p>
          <p className="mt-2 text-gray-400 sm:text-[6px] md:text-[13px] text-[10px] lg-text-[15px]">
            <span className="text-gray-300">━━━━━</span> or{" "}
            <span className="text-gray-300">━━━━━</span>
          </p>

          <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
            Browse
          </button>
          <h1 className="mt-4 text-center text-sm sm:text-base  mb-5 text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            Original Copy of NMAT Result (Percentile rank = 40%)
          </h1>
        </div>
      </div>
      {/* First Box (100% width) */}
      <div className="mt-6 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center">
        <img src={cloud} alt="Cloud Upload" className="mb-4" />
        <p className="mt-2 text-gray-600 font-bold ">Drag Files to Upload</p>
        <p className="mt-2 text-gray-400 text-[12px]">
          <span className="text-gray-300">━━━━━</span> or{" "}
          <span className="text-gray-300">━━━━━</span>
        </p>

        <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
          Browse
        </button>
        <h1 className="mt-4 text-center text-sm sm:text-base  mb-5 text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
          Certificate of Grade Point Average or Grade Weighted Average (GWA) *If
          Pre-Med taken outside Philippines, We need “Red Ribbon” authentication
          from the embassy
        </h1>
      </div>
      {/* First Box (100% width) */}
      <div className="mt-6 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center">
        <img src={cloud} alt="Cloud Upload" className="mb-4" />
        <p className="mt-2 text-gray-600 font-bold ">Drag Files to Upload</p>
        <p className="mt-2 text-gray-400 text-[12px]">
          <span className="text-gray-300">━━━━━</span> or{" "}
          <span className="text-gray-300">━━━━━</span>
        </p>

        <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
          Browse
        </button>
        <h1 className="mt-4 text-center text-sm sm:text-base  mb-5 text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
          Undertaking with waiver, release and Quit claim *NMAT & Failed
          Subjects
        </h1>
      </div>
      {/* Two Boxes (50% each) */}
      <div className="flex gap-3 mt-6">
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center">
          <img src={cloud} alt="Cloud Upload" className="mb-4" />
          <p className="mt-2 text-gray-600  font-bold sm:text-[6px] md:text-[15px] text-[10px] lg-text-[30px]">
            Drag Files to Upload
          </p>
          <p className="mt-2 text-gray-400 sm:text-[6px] md:text-[13px] text-[10px] lg-text-[15px]">
            <span className="text-gray-300">━━━━━</span> or{" "}
            <span className="text-gray-300">━━━━━</span>
          </p>

          <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
            Browse
          </button>
          <h1 className="mt-4 text-center  mb-5 text-sm sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            Physical examination report from University Clinic
          </h1>
        </div>
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-[17px] flex flex-col items-center justify-center">
          <img src={cloud} alt="Cloud Upload" className="mb-4" />
          <p className="mt-2 text-gray-600 font-bold sm:text-[6px] md:text-[15px] text-[10px] lg-text-[30px]">
            Drag Files to Upload
          </p>
          <p className="mt-2 text-gray-400 sm:text-[6px] md:text-[13px] text-[10px] lg-text-[15px]">
            <span className="text-gray-300">━━━━━</span> or{" "}
            <span className="text-gray-300">━━━━━</span>
          </p>

          <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
            Browse
          </button>
          <h1 className="mt-4 text-center text-sm  mb-5 sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            School of Medicine Retention Policy & Grading System Effective SY
            2021-2022
          </h1>
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <button
          className="w-[130px] h-[40px] bg-[#8E2525] cursor-pointer text-white text-[14px] rounded-[10px] hover:bg-[#A93C3C] transition-all"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Foreigner;
