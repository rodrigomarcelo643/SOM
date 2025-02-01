import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import verified from "../../assets/verified.png";
function StudentForgotPassword() {
  const navigate = useNavigate();
  const [emailOrId, setEmailOrId] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [error, setError] = useState("");

  const handleEmailOrIdChange = (e) => {
    setEmailOrId(e.target.value);
  };

  const handleOtpChange = (e, index) => {
    let newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleOtpSubmit = () => {
    if (otp.join("") === "12345") {
      setIsOtpVerified(true);
      setError("");
    } else {
      setError("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col items-center px-2 justify-center min-h-screen bg-white py-10"
      style={{ fontFamily: "Inter" }}
    >
      {/* Back Icon */}
      <div
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 cursor-pointer"
      >
        <ArrowLeftIcon className="h-8 w-8 text-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#B82A2A] mb-4">
        Forgot Password?
      </h2>

      {!isOtpSent ? (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl border border-gray-300">
          <p className="text-[15px] text-gray-800 mb-4">
            Enter your student ID or email to receive a reset OTP.
          </p>
          <input
            type="text"
            value={emailOrId}
            onChange={handleEmailOrIdChange}
            placeholder="Student ID or Email"
            className="w-full p-4 mb-4 border border-gray-400  rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300 transition"
          />
          <button
            onClick={() => setIsOtpSent(true)}
            className="w-full py-3 bg-[#B82A2A] text-white rounded-[12px] text-lg hover:bg-[#A32A2A] transition"
          >
            Find Email
          </button>
        </div>
      ) : !isOtpVerified ? (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl mt-4 border border-gray-300">
          <p className="text-[15px] text-gray-800 mb-4">
            OTP has been sent to{" "}
            <span className="text-[#B82A2A] underline">
              rodrigomarcelo643@gmail.com
            </span>
          </p>
          <div className="flex gap-6  justify-center mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                className="w-12 h-12 text-2xl text-center border-gray-400  rounded-md border focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300  transition"
              />
            ))}
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
          )}
          <button
            onClick={handleOtpSubmit}
            className="w-full py-3 bg-[#B82A2A] text-white rounded-[12px] text-lg hover:bg-[#A32A2A] transition"
          >
            Verify OTP
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md p-6 bg-green-100 border border-green-300 rounded-lg shadow-xl mt-4">
          <div className="flex flex-col items-center">
            <p className="text-xl text-green-800 flex items-center text-center font-semibold">
              <img src={verified} className="w-10 h-10 mr-2" alt="Verified" />
              <span className="mt-4">
                Password reset instructions have been sent to your email.
              </span>
            </p>
            <p className="text-sm text-green-700 text-center mt-2">
              Check your inbox and follow the instructions to reset your
              password.
            </p>

            {/* Back to Login Button */}
            <a
              href="/"
              className="mt-4 px-6 py-3 bg-[#B82A2A] text-white text-sm font-medium rounded-lg shadow-md hover:bg-[#dd8989] transition"
            >
              Back to Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentForgotPassword;
