import React, { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BookingContext } from "../Layouts/Layout";

function BookingContainer({ tab, setTab }) {

    const {showBooking} = useContext(BookingContext)
  console.log(tab === "malayalam", "jiiii");

 
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <>
   {
    showBooking &&  
    (
        <div id="bookingmalayalam" className="w-full sm:h-[300px] bg-[#F8F8F8] mt-8 p-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex space-x-8 mb-4 md:mb-0">
          <button className="text-headingColor font-semibold border-b-2 border-red-500 pb-2">
          സ്‌പെഷ്യാലിറ്റികളും  ഡോക്ടർമാരും
          </button>
        </div>
        <div className="flex cursor-pointer space-x-4">
          <span
            onClick={() => setTab("malayalam")}
            className={`${
              tab === "malayalam"
                ? "text-black font-semibold border-b-2 border-red-500"
                : "text-gray-500"
            }`}
          >
            മലയാളം
          </span>
          <span
            onClick={() => setTab("english")}
            className={`${
              tab === "english"
                ? "text-headingColor font-semibold border-b-2 border-red-500"
                : "text-gray-500"
            }`}
          >
            English
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between space-y-4 sm:mt-10 md:space-y-0 md:space-x-6">
        <div className="flex flex-col items-center w-full md:w-1/4">
          <label className="text-headingColor font-semibold mb-2"> സ്‌പെഷ്യാലിറ്റികൾ  </label>
          <div className="relative w-full">
            <select className="appearance-none border rounded-full py-2 px-4 w-full text-headingColor leading-tight focus:outline-none focus:shadow-outline">
              <option>Select Specialities</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/4">
          <label className="text-headingColor font-semibold mb-2">ഡോക്ടർമാർ</label>
          <div className="relative w-full">
            <select className="appearance-none border rounded-full py-2 px-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option>Select Doctors</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4">
          <button className="flex  items-center btn">
            View Profile <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
        
       
      </div>
    </div>
  )}
  </>
    // </div>
  );
}

export default BookingContainer;
