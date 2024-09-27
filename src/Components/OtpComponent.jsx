import React, { useEffect, useRef, useState, useContext } from "react";
import { BookingContext } from "../Layouts/Layout";
import apiInstance from "../Api";

export default function OtpComponent({ otp, setOtp }) {
  const { showOTP, setShowOTP } = useContext(BookingContext);
  const inputRefs = useRef([]); // Array of refs for each input field

  useEffect(() => {
    if (showOTP) {
      inputRefs.current[0]?.focus(); // Safeguard with optional chaining
    }
  }, [showOTP]);

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
          inputRefs.current[index - 1]?.focus(); // Navigate backward and focus
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
        inputRefs.current[index + 1]?.focus(); // Safeguard with optional chaining
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
        inputRefs.current[otp.length - 1].focus(); // Focus the last input
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const mobile = localStorage.getItem('mobile');
      console.log(mobile, "clicked");

      const otpResponse = await apiInstance.post('patient/verify-otp', {
        phone_number: mobile,
        otp: otp.join(""),
      }, {
        withCredentials: true,
      });
      const response = await apiInstance.get('patient/visitor-detail',{withCredentials:true})
      console.log(response,'responseeee')
    //  console.log(otpResponse,'ressponse')
    //   const setCookieHeader = otpResponse.headers['set-cookie'];
    //   console.log('Set-Cookie Header:', setCookieHeader);

      if (otpResponse.data) {
        setShowOTP(false);
        setOtp(Array(otp.length).fill("")); // Reset OTP input
        console.log(otpResponse.data, 'data from API');
      }
//  const response = await apiInstance.get('doctors/list/')
//  console.log(response.data, 'response from API')

    } catch (error) {
      console.error("Error verifying OTP:", error);
      // You might want to set an error message in the state and display it to the user here.
    }
  };

  return (
    <div className="mt-6 flex items-center justify-center">
      <form id="otp-form" onSubmit={handleOtpSubmit} className="flex flex-col gap-4 items-center">
        <div className="flex gap-2">
          {otp.map((digit, index) => (
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
        <button type="submit" className="bg-secondaryColor text-white py-2 px-4 rounded-lg">
          Verify OTP
        </button>
      </form>
    </div>
  );
}
