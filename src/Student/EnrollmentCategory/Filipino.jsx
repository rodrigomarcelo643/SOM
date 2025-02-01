import React from "react";
import cloud from "../../assets/cloud.png";
function Filipino() {
  return (
    <div>
      <div className="flex items-center mt-10 pb-2">
        {/* Title */}
        <h2 className="text-base text-gray-700 md:text-lg  whitespace-nowrap">
          Attached the required files
        </h2>

        {/* Line on the Right */}
        <div className="flex-1 border-b border-gray-400 ml-2 md:ml-4 w-16 md:w-auto"></div>
      </div>

      {/* First Box (100% width) */}
      <div className="mt-6 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
        <img src={cloud} alt="Cloud Upload" className="mb-4" />
        <p className="mt-2 text-gray-600 font-bold">Drag Files to Upload</p>
        <p className="mt-2 text-gray-400 text-[12px]">
          <span className="text-gray-300">━━━━━</span> or{" "}
          <span className="text-gray-300">━━━━━</span>
        </p>

        <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
          Browse
        </button>
        <h1 className="mt-4 text-center mb-5 text-sm sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
          2 Photocopies of NSO Birth Certificates
        </h1>
      </div>

      {/* Two Boxes (50% each) */}
      <div className="flex gap-3 mt-6">
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
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
          <h1 className="mt-4 text-center  mb-5 text-sm sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            Good Moral (from the dean 1 copy & from the professor 1 copy)
          </h1>
        </div>
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
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
          <h1 className="mt-4 text-center  mb-5 text-sm sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            2 Photocopies of BS Diploma or Certificate Expected Date of
            Graduation from the Dean
          </h1>
        </div>
      </div>
      {/* Two Boxes (50% each) */}
      <div className="flex gap-3 mt-6">
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
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
          <h1 className="mt-4 text-center  mb-5 text-sm sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            Original Copy of NMAT Result (Percentile rank = 40%)
          </h1>
        </div>
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
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
          <h1 className="mt-4 text-center text-sm   mb-5 sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            2pcs 2 x 2 picture
          </h1>
        </div>
      </div>
      {/* Two Boxes (50% each) */}
      <div className="flex gap-3 mt-6">
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
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
          <h1 className="mt-4 text-center text-sm  mb-5  sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            Photocopy of Residence Certificate (Cedula)
          </h1>
        </div>
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
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
            Certificate of Grade Point Average or Grade Weighted Average (GWA)
          </h1>
        </div>
      </div>
      {/* First Box (100% width) */}
      <div className="mt-6 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
        <img src={cloud} alt="Cloud Upload" className="mb-4" />
        <p className="mt-2 text-gray-600 font-bold ">Drag Files to Upload</p>
        <p className="mt-2 text-gray-400 text-[12px]">
          <span className="text-gray-300">━━━━━</span> or{" "}
          <span className="text-gray-300">━━━━━</span>
        </p>

        <button className="mt-2 text-[12px] py-2 px-6 bg-[#C94848] text-white rounded-[20px] transition-all hover:bg-[#A93C3C]">
          Browse
        </button>
        <h1 className="mt-4 text-center text-sm  mb-5 sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
          Undertaking with waiver, release and Quit claim *NMAT & Failed
          Subjects
        </h1>
      </div>
      {/* Two Boxes (50% each) */}
      <div className="flex gap-3 mt-6">
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
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
          <h1 className="mt-4 text-center text-sm  mb-5 sm:text-base text-gray-600 md:text-[15px] lg:text-[15px] xl:text-[20px] text-[14px]">
            Physical examination report from University Clinic
          </h1>
        </div>
        <div className="w-1/2 p-4 bg-[#F8F8F8] border-2 border-dashed border-[#E8BFBF] rounded-md flex flex-col items-center justify-center">
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
export default Filipino;
