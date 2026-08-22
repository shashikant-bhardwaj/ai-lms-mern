import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import UseSendOtp from "../hooks/useSendOtp.js";
import { ClipLoader } from "react-spinners"
import UseVerifyOtp from "../hooks/useVerifyOtp.js";
import UseResetPassword from "../hooks/useResetPassword.js";
import { toast } from "react-toastify";
function ForgetPassword() {
  const navigate = useNavigate();
  const { loading , sendOtp} = UseSendOtp();
  const  {loading2, verifyOtp} = UseVerifyOtp();
  const {loading3, resetPassword} = UseResetPassword();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
 
  // submitHandler  for step 1
  const sendOtpHandler = async(e) => {
    e.preventDefault();
    await sendOtp(email);
    setStep(2);
  }

  // submitHandler for step 2
  const  verifyOtpHandler = async(e) => {
    e.preventDefault();
    await verifyOtp(email, otp);
    setStep(3);
  }

  //submitHandler for step 3
  const resetPasswordHandler = async(e) => {
    e.preventDefault();
    if(newPassword != conPassword) return toast.success("password is not  matched")
    await resetPassword(email, newPassword)
    navigate("/login")
    setStep(1);
  }
  // for step 1
 

  return (
    <div
      className="min-h-screen flex items-center justify-center
        bg-gray-100 px-4"
    >
      {/* {step1} */}
      {step == 1 && <div className="flex flex-col bg-white shadow-md rounded-xl p-8 max-w-md
      w-full">
        <h2 className="text-2xl font-bold mb-6 text-center
        text-gray-800">Forget Your Password</h2>
       <form onSubmit={sendOtpHandler} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium
          text-gray-700">
           Enter your email address
          </label>
          <input onChange={(e) => setEmail(e.target.value)} id="email" type="text" value={email} className="mt-1 w-full
          px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none
          focus:ring-2 focus:ring-[black]" required placeholder="you@example.com"/>
        </div>
        <button disabled={loading} className="w-full bg-[black] hover:bg-[#4b4b4b] 
        text-white py-2 px-4 rounded-md font-medium cursor-pointer">{loading ? <ClipLoader size={30} color="white"/> : "Send OTP"}</button>
       </form>
       <div onClick={() => navigate("/login")} className="text-sm text-center mt-4 hover:underline cursor-pointer">Back to Login</div>
        </div>}

      {/* {step2} */}
      {step == 2 && <div className="flex flex-col bg-white shadow-md rounded-xl p-8 max-w-md
      w-full">
        <h2 className="text-2xl font-bold mb-6 text-center
        text-gray-800">Enter OTP</h2>
       <form onSubmit={verifyOtpHandler} className="space-y-4">
        <div>
          <label htmlFor="otp" className="block text-sm font-medium
          text-gray-700">
           Please enter the 4-digit code sent to your email
          </label>
          <input onChange={(e) => setOtp(e.target.value)} value={otp} id="otp" type="text"  className="mt-1 w-full
          px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none
          focus:ring-2 focus:ring-[black]" required placeholder="* * *"/>
        </div>
        <button className="w-full bg-[black] hover:bg-[#4b4b4b] 
        text-white py-2 px-4 rounded-md font-medium cursor-pointer">{loading2 ? <ClipLoader size={30} color="white"/> : "Verify OTP"}</button>
       </form>
       <div onClick={() => navigate("/login")} className="text-sm text-center mt-4 hover:underline cursor-pointer">Back to Login</div>
        </div>}

      {/* {step3} */}
      {step == 3 && <div className="flex flex-col bg-white shadow-md rounded-xl p-8 max-w-md
      w-full">
        <h2 className="text-2xl font-bold mb-6 text-center
        text-gray-800">Reset Your Passsword</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Enter a new password below to regain access
          to your account
        </p>
       <form  onSubmit={resetPasswordHandler} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium
          text-gray-700">
           New Password
          </label>
          <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} id="password" type="text"  className="mt-1 w-full
          px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none
          focus:ring-2 focus:ring-[black]" required placeholder="Enter new password"/>
        </div>
        <div>
          <label htmlFor="conpassword" className="block text-sm font-medium
          text-gray-700">
           Confirm Password
          </label>
          <input onChange={(e) => setConPassword(e.target.value)} value={conPassword} id="conpassword" type="text"  className="mt-1 w-full
          px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none
          focus:ring-2 focus:ring-[black]" required placeholder="Confirm password"/>
        </div>
        <button className="w-full bg-[black] hover:bg-[#4b4b4b] 
        text-white py-2 px-4 rounded-md font-medium cursor-pointer">{loading3 ? <ClipLoader size={30} color="white"/> : "Reset Password"}</button>
       </form>
       <div onClick={() => navigate("/login")} className="text-sm text-center mt-4 hover:underline cursor-pointer">Back to Login</div>
        </div>}
    </div>
  );
}

export default ForgetPassword;
