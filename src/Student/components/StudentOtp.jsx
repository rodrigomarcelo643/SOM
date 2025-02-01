import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import capsuleImage from "../../assets/capsule.png";
import { useNavigate } from "react-router-dom";

const StudentOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(300);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
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
      navigate("/Dashboard");
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

  function goBack() {
    navigate("/");
  }

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
        <div className="flex gap-8 px-12 py-7 text-[5px] border-2 border-[#D7D7D7] rounded-[20px]">
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
          <p className="text-red-500 text-sm mt-1 mb-[-8px] ">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-left text-sm mt-2 mb-[-5px]">
            OTP Verified
          </p>
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
                : "bg-red-500 text-white"
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
    </div>
  );
};

export default StudentOtp;
