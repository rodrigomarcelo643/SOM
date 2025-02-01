import React, { useState } from "react";
import LoginNavbar from "../Navbar/LoginNavbar";
import BG from "../../assets/loginBg.png";
import link1 from "../../assets/fb.png";
import link2 from "../../assets/globe.png";
import link3 from "../../assets/envelop.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // State for form fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function OtpVerify() {
    navigate("/OTP");
  }
  function forgotPassword() {
    navigate("/forgotpassword");
  }
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in with:", username, password);
    // Implement actual login logic here
  };

  return (
    <div className="min-h-screen flex overflow-hidden flex-col">
      {/* Top 10px White Space */}
      <div className="h-[18px] bg-white w-full"></div>

      {/* Page Content with Background and Margin */}
      <div
        className="flex-1 bg-cover  bg-media bg-center mt-2 mb-13 flex flex-col"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "100% 107%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style jsx>{`
          @media (max-width: 400px) {
            /* For screens smaller than 400px, set background size to 150% */
            .bg-media {
              background-size: 100% 100% !important;
            }
            .form-lg {
              width: 300px;
            }
            .small-welcome {
              display: none;
            }
            .copyright {
              display: none;
            }
          }

          @media (max-width: 640px) {
            /* For small screens, set background size to 130% */
            .bg-media {
              background-size: 190% 190% !important;
            }
            .small-welcome {
              display: none;
            }
          }

          @media (min-width: 640px) and (max-width: 1024px) {
            /* For medium screens (md), set background size to 120% */
            .bg-media {
              background-size: 190% 170% !important;
            }
            .small-welcome {
              display: none;
            }
          }

          @media (min-width: 1024px) {
            /* For larger screens, set background size to 100% */
            .bg-media {
              background-size: 100% 100% !important;
            }
          }
        `}</style>

        {/* Navbar */}
        <LoginNavbar />

        {/* Main Content */}
        <div className="flex flex-1 justify-center items-center relative left-10 mt-10 px-4 space-x-5 flex-col md:flex-row-reverse">
          {/* Right-Aligned Login Form */}
          <div className="bg-white p-10 form-lg rounded-[20px] mt-7 shadow-lg w-96 mr-20 sm:w-[400px] sm:mb-10 md:w-[400px]">
            <div className="flex items-center mb-6">
              {/* Red Circle */}
              <div className="w-4 h-4 bg-[#922727] mt-[-15px] rounded-full mr-2"></div>
              {/* Login Title */}
              <h2 className="text-[28px] font-bold text-[#232323] mb-5">
                Login
              </h2>
            </div>
            <p className="text-sm mb-3 mt-3 mt-[-25px] text-[#787878]">
              Please enter the right information <br></br> to continue.
            </p>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className="block text-sm mb-1 text-[#787878]"
                >
                  ID Number
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="05-2324-008331"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300  text-sm rounded-md"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm mb-1 text-[#787878]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 mb-1 text-sm border border-gray-300 rounded-md"
                  required
                />
                <p
                  onClick={forgotPassword}
                  className="text-[13px] text-end mt-2 cursor-pointer underline text-[#6D1212]"
                >
                  Forgot Password
                </p>
              </div>

              {/* Login Button */}
              <div className="flex justify-center mt-4 items-center">
                <button
                  onClick={OtpVerify}
                  type="submit"
                  className="py-2.5 cursor-pointer px-8 bg-[#6D1212] text-white rounded-md hover:bg-[#8E2525]"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>

          {/* Center Image */}
          <div className="text-left max-w-[350px] w-full mr-20 ml-40 mb-10 md:mb-0 md:w-1/2 lg:block hidden">
            <h1 className="text-[30.19px] font-semibold text-white mt-[-70px]">
              School of
            </h1>
            <h2 className="text-[60px] font-bold mt-[-9px] text-white">
              Medicine
            </h2>
            <p className="text-sm mt-2 text-[#f1f1f1]">
              To produce medical doctors with the following attributes:
              Competent, Team-player, Leader, Health Advocate, Communicator,
              Scholar/Researcher & Compassionate.
            </p>

            {/* Links to images */}
            <div className="flex  mt-3 space-x-2">
              <a href="#" className="flex justify-center items-center">
                <img src={link1} alt="Link 1" className="w-8.5 h-8.5" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={link2} alt="Link 2" className="w-8.5 h-8.5" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={link3} alt="Link 3" className="w-8.5 h-8.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="small-welcome flex items-center ml-25 text-3xl font-bold md:ml-[0px] lg:ml-24 lg:mt-[-80px] sm:mt-8 sm:ml-[20px] md:text-4xl sm:text-4xl">
          <div className="w-5 h-5 bg-green-500 rounded-full mr-4"></div>
          <span className="lg:text-7xl text-[#924444] md:text-5xl sm:text-4xl">
            Welcome!
          </span>
        </div>
        {/* Copyright Text */}
        <div className="text-center copyright sm:hidden md:block lg:block text-sm text-[#787878]">
          <p className="lg:mt-[-35px] md:mt-[-35px]  relative sm:hidden md:block lg:block sm:relative sm:top-13 sm:text-[#924444] lg:left-70">
            &copy; MSIS 2025 Southwestern University Phinma | School of Medicine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
