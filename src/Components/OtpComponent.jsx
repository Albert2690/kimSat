import React, { useEffect, useRef, useState, useContext } from "react";
import { BookingContext } from "../Layouts/Layout";
import apiInstance from "../Api";

export default function OtpComponent({ otp, setOtp }) {
  const { showOTP, setShowOTP } = useContext(BookingContext);
  const inputRefs = useRef([]); // Array of refs for each input field

  useEffect(() => {
    inputRefs.current[0].focus();
  }, [showOTP]);

  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[index - 1].focus();
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
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const mobile = await localStorage.getItem('mobile')
      console.log(mobile,"clicked");
      const otpResponse = await apiInstance.post('patient/verify-otp',{
        phone_number:mobile,
        otp: otp.join(""),
      })
      if(otpResponse.data){
        console.log(otpResponse.data,'dattta from api')
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <>
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
                className="shadow-xs flex w-[64px] items-center text-textColor justify-center rounded-lg border border-stroke bg-white p-2 text-center text-lg font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
              />
            ))}
          </div>
          <button
            type="submit"
            className="bg-secondaryColor text-white py-2 px-4 rounded-lg"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </>
  );
}
