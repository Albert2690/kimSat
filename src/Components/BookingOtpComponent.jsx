import React, { useEffect, useRef, useState, useContext } from "react";
import { BookingContext } from "../Layouts/Layout";
import apiInstance from "../Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function BookingOtpComponent({ otp, setOtp }) {
  const navigate = useNavigate();
  const { showOTP, setShowOTP,setShowBookingOTP,showBookingOTP } = useContext(BookingContext);
  const inputRefs = useRef([]); 

  useEffect(() => {
    if (showOTP) {
      inputRefs.current[0]?.focus(); 
    }
  }, [showBookingOTP]);

  const handleKeyDown = (e) => {
    
    if (!/^[0-9]{1}$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab" && !e.metaKey) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      if (index >= 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index),
          "",
          ...prevOtp.slice(index + 1),
        ]);
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus(); 
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      const digits = text.split("");
      setOtp(digits);
      if (inputRefs.current[otp.length - 1]) {
        inputRefs.current[otp.length - 1].focus(); 
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const mobile = localStorage.getItem("otp_mobile");
      // console.log(mobile, "clicked");

      const otpResponse = await apiInstance.post(
        "patient/verify-otp",
        {
          phone_number: mobile,
          otp: otp.join(""),
        },
        {
          withCredentials: true,
        }
      );

      if (otpResponse.data.success) {
        // localStorage.setItem("mobile",otpResponse.data.visitor.phone_number)
        localStorage.removeItem('otp_mobile')
        const formData =   JSON.parse(localStorage.getItem('formdata'));

        setShowBookingOTP(false);
        const booking = await apiInstance.post('appointments/create',{formData,phone_number:mobile},{withCredentials:true})

        // console.log(otpResponse.data.token.access);
        if (otpResponse.data.token.access) {
          localStorage.setItem("userToken", otpResponse.data.token.access);
        localStorage.setItem("mobile",otpResponse.data.visitor.phone_number)

        }
        if(booking.data.success){
          toast.success("Appoinment  booked successfully");
          localStorage.removeItem('formdata')
         
            navigate("/patient-profile"); 
        
        
        }else{
          toast.error("Failed to book appointment");
        }
      
        // console.log("OTP verified");
      } else {
        toast.error(otpResponse.data.error)
        // console.log("OTP verification failed");
       
      }
    } catch (error) {
      toast.error('Internal server Occured')
      console.error("Error verifying OTP:", error);
     
    }
  };

  return (
    <div className="mt-6 flex items-center justify-center">
      <form id="otp-form" onSubmit={handleOtpSubmit} className="flex flex-col gap-4 items-center">
        <div className="flex gap-2">
          {otp?.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
              className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-sm font-[300] text-gray-5 outline-none sm:text-lg dark:border-dark-3 dark:bg-white/5"
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-secondaryColor text-white py-2 px-4 rounded-lg hover:bg-secondaryColor-dark transition-colors"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
}
