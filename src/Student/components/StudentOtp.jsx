import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Typography } from "@material-tailwind/react";
import capsuleImage from "../../assets/capsule.png";
import verified from "../../assets/verified.png";
import { useNavigate } from "react-router-dom";

const StudentOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(300);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isModalAnimating, setIsModalAnimating] = useState(false); // State for modal animation trigger
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    let newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    if (otp.join("") === "123456") {
      setSuccess(true);
      setIsModalAnimating(true);
      setIsModalOpen(true);
      setError("");
    } else {
      setError("Invalid OTP code");
      setSuccess(false);
    }
  };

  const handleResend = () => {
    setTimer(300);
    setResendSuccess(true);

    setTimeout(() => setResendSuccess(false), 3000);
  };

  const goBack = () => {
    navigate("/");
  };
  const handleContinue = () => {
    setIsModalOpen(false);
    navigate("/student");
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Side (OTP Input) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 relative min-h-screen sm:flex sm:justify-center sm:items-center">
        <IoArrowBack
          onClick={goBack}
          className="absolute top-5 left-5 text-3xl cursor-pointer"
        />
        <h2 className="text-3xl font-semibold mb-4">We emailed you a code</h2>
        <p className="text-sm text-center font-semibold text-[#383838CC] mb-4">
          Enter the verification code from <br /> your email
        </p>
        <div className="flex gap-8 px-9 py-7 text-[5px] border-2 border-[#D7D7D7] rounded-[20px]">
          {otp.map((data, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(index, e)}
              className="w-4.5 h-4.5 text-lg text-center border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          ))}
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-1 mb-[-8px]">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-left text-sm mt-2 mb-[-5px]"></p>
        )}
        {resendSuccess && (
          <p className="text-green-500 text-sm mt-2 mb-[-5px]">
            OTP Resent Successfully
          </p>
        )}
        <div className="flex gap-4 ">
          <button
            onClick={handleVerify}
            className="mt-4 py-2 px-10 bg-[#8D2525] cursor-pointer hover:bg-[#A0A0A0] text-white rounded-md"
          >
            Verify
          </button>
          <button
            onClick={handleResend}
            disabled={timer > 0}
            className={`mt-4 py-2 px-10 bg-[#A0A0A0]  text-[16px] text-white rounded-md ${
              timer > 0
                ? "bg-gray-400 text-white cursor-not-allowed "
                : "bg-red-500 text-white cursor-pointer"
            }`}
          >
            Resend OTP
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4 font-semibold">
          {timer > 0
            ? `${Math.floor(timer / 60)}:${String(timer % 60).padStart(
                2,
                "0"
              )} before you can Request a new code`
            : ""}
        </p>
      </div>

      {/* Right Side (Background & Image) - Hidden on Small Screens */}
      <div className="hidden md:flex w-1/2 bg-[#8D2525] justify-left items-center relative">
        <img
          src={capsuleImage}
          alt="Capsule"
          className="h-2/4 w-[700px] md:left-[-30px] lg:block object-contain relative lg:left-[-250px]"
        />
      </div>

      {/* Modal for Success with Animation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-20">
          <div
            className={`bg-white p-6 text-center justify-center rounded-[23px] shadow-lg w-96 transition-all duration-700 ease-out transform ${
              isModalAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onAnimationEnd={() => setIsModalAnimating(false)} // Stop animation once complete
          >
            <img
              className="mx-auto relative top-[-50px]"
              src={verified}
              alt="Verified"
            />
            <Typography className="text-3xl text-[#691717] relative top-[-60px] py-4 border-b border-[#69171780] font-bold mb-4">
              Account Verified!
            </Typography>
            <div className="flex flex-col justify-center items-center gap-4">
              <button
                onClick={handleContinue}
                className="w-[150px] py-3 mt-[-60px] shadow-lg bg-[#8D2525] cursor-pointer text-white rounded-[40px] hover:bg-red-600"
              >
                Continue
              </button>
              <p className="text-center text-sm text-gray-500">
                Click below to redirect to homepage
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentOtp;
