import React, { useEffect, useRef, useState, useContext } from "react";
import { BookingContext } from "../Layouts/Layout";
import apiInstance from "../Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function OtpComponent({ otp, setOtp }) {
  const navigate = useNavigate();
  const { showOTP, setShowOTP } = useContext(BookingContext);
  const [timer, setTimer] = useState(90); // Timer set to 90 seconds (1:30)
  const [isResendDisabled, setIsResendDisabled] = useState(true); // Resend OTP initially disabled
  const inputRefs = useRef([]);
  const [mobile, setMobile] = useState(localStorage.getItem("otp_mobile"));

  useEffect(() => {
    if (showOTP) {
      inputRefs.current[0]?.focus(); // Focus on the first input when OTP is shown
      startTimer(); // Start the countdown timer
    }
  }, [showOTP]);

  const startTimer = () => {
    setIsResendDisabled(true); // Disable the resend button
    setTimer(90); // Reset the timer
    const interval = setInterval(() => {
      setTimer((prev) => {  
        if (prev <= 1) {
          clearInterval(interval);
          setIsResendDisabled(false); // Enable resend after timer ends
        }
        return prev - 1;
      });
    }, 1000); // Countdown by 1 second
  };

  const handleKeyDown = (e) => {
    const validKeys = /^[0-9]{1}$/;
    if (!validKeys.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab" && !e.metaKey) {
      e.preventDefault();
    }

    const index = inputRefs.current.indexOf(e.target);
    if (e.key === "Delete" || e.key === "Backspace") {
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

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      const digits = text.split("");
      setOtp(digits);
      inputRefs.current[otp.length - 1]?.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const otpResponse = await apiInstance.post(
        "patient/verify-otp",
        {
          phone_number: mobile,
          otp: otp.join(""),
        },
        { withCredentials: true }
      );

      if (otpResponse.data.success) {
        localStorage.setItem("mobile", otpResponse.data.visitor.phone_number);
        localStorage.removeItem("otp_mobile");
        if (otpResponse.data.token.access) {
          localStorage.setItem("userToken", otpResponse.data.token.access);
        }
        setOtp(Array(4).fill(""));
        setShowOTP(false)
        navigate("/patient-profile");
      } else {
        toast.error(otpResponse.data.error);
      }
    } catch (error) {
      toast.error(error.response.data.error)
      console.error("Error verifying OTP:", error);
    }
  };

  const resendOtp = async () => {
    if (isResendDisabled) return; // Prevent resend if disabled
    setTimer(90);
    try {
      const response = await apiInstance.post("/patient/login", {
        phone_number: mobile,
      }, { withCredentials: true });

      if (response.data.success) {
        localStorage.setItem("otp_mobile", mobile);
        setShowOTP(true);
        startTimer(); // Restart timer
        toast.success("OTP resent successfully");
      } else {
        console.log('helooooi')
        toast.error(response.data.error);
      }
    } catch (err) {
      toast.error(err.response.data.error)
      console.log(err.message,'errorrr')
     
    }
  };

  return (
    showOTP && (
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
                onFocus={(e) => e.target.select()}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="shadow-xs w-[64px] rounded-lg border p-2 text-center text-sm font-light text-gray-700 sm:text-lg"
              />
            ))}
          </div>
          {timer > 0 && (
            <span className="text-red-600">
              Resend OTP will be enabled after: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
            </span>
          )}
          <button
            type="button"
            onClick={resendOtp}
            disabled={isResendDisabled}
            className={`text-thirdColor ${isResendDisabled ? "opacity-50" : "hover:text-secondaryColor"} transition-opacity`}
          >
            Resend OTP
          </button>
          <button
            type="submit"
            className="bg-thirdColor text-white py-2 px-4 rounded-lg hover:bg-secondaryColor transition-colors"
          >
            Verify OTP
          </button>
        </form>
      </div>
    )
  );
}
