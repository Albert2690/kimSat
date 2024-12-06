// import React, { useState, useEffect } from "react";
// import coverImage from '../assets/images/medium-shot-smiley-senior-couple-with-laptop.jpg';
import coverImage from "../assets/images/medium-shot-smiley-senior-couple-with-laptop.jpg";
import bookingImage from "../assets/images/bookanappointment (3).jpg"
import BookingMobileBanner from '../assets/images/phoneappointment.jpg'
import Loader from "../Components/Loader/Loader";
import apiInstance from "../Api";
import Loader1 from "../Components/Loader/Loader1";
import { toast } from "react-toastify";
// import { useParams } from "react-router-dom";
import { createContext, useState, useContext, useEffect } from 'react';
import { BookingContext } from '../Layouts/Layout';
import { useParams } from "react-router-dom";


function BookingPage() {
  const {showLogin,setShowLogin,showOTP,setShowOTP,showBookingOTP,setShowBookingOTP} = useContext(BookingContext)
  const { id } = useParams();
  const [doctor,setDoctor] = useState()
  const [isLoading,setIsLoading]= useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    id:'',
    lastName: "",
    email: "",
    mrd: '',
    mobile: "",
    appointmentDate: "",
    age: "",
    gender: "",
    address: "",
    country: "",
    illness: "",
  });
  const [loginUser, setLoginUser] = useState(null);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  useEffect(() => {
    const loginUSer = localStorage.getItem("mobile");
    setLoginUser(loginUSer);
    const handleDoctorApi = async () => {
      try {
        const otpResponse = await apiInstance.get(`doctors/${id}`, {
          withCredentials: true,
        });
        if (otpResponse.data.success) {
          setDoctor(otpResponse.data.data);
        } else {
          toast.error(otpResponse.data.error);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleDoctorApi()
  },[id]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    // const appointmentDate = new Date(formData.appointmentDate);
    // const currentDate = new Date();

    // Set both dates to midnight to ignore time
    // appointmentDate.setHours(0, 0, 0, 0);
    // currentDate.setHours(0, 0, 0, 0);

    let newError = {};
    let isValid = true;

    if (formData.firstName.length < 3) {
      newError.firstName = "Please enter your name.";
      isValid = false;
    }
    // if (formData.lastName.length < 3) {
    //   newError.firstName = "Please enter your name.";
    //   isValid = false;
    // }
    if (!emailRegex.test(formData.email)) {
      newError.email = "Please enter a valid email address.";
      isValid = false;
    }

    // if (appointmentDate < currentDate || formData.appointmentDate==='') {
    //   newError.appointmentDate = 'Please enter a valid date.';
    //   isValid = false;
    // }

    if (
      !loginUser &&
      (formData.mobile.length !== 10 ||
        !mobileRegex.test(formData.mobile) ||
        formData.mobile==='')
    ) {
      // console.log(formData.mobile,'bobileeeeee')
      newError.mobile = "Please enter a valid mobile number.";
      isValid = false;
    }

    // if (formData.country === "") {
    //   newError.country = "Please select a country.";
    //   isValid = false;
    // }

    if (formData.age.length > 3 || formData.age === "") {
      newError.age = "Age should be a valid number.";
      isValid = false;
    }

    if (formData.mrd.length > 0 && formData.mrd.length !== 6) {
      newError.mrd = "Enter a valid MRD number.";
      isValid = false;
    }
    if (formData.gender === "") {
      newError.gender = "Please select a gender.";
      isValid = false;
    }
    if (formData.appointmentDate === "") {
      newError.appointmentDate = "Please select a appoinment day.";
      isValid = false;
    }
    setError(newError);

    try{
      

    if (isValid) {
      // console.log(formData,'formdata from booking page ')
    setIsLoading(true)

      formData.id = id
      if(loginUser){
        formData.mobile=loginUser
        const response = await  apiInstance.post('appointments/create',{
          formData,
        },{
          withCredentials:true
        })
        if(response.data.success){
          // console.log(response.data,'from booking ')
          toast.success('Thank you for initiating your appointment booking! Our team will get in touch with you shortly.')
          setTimeout(()=>{
            setIsLoading(false)
        },1500)
        }else{
          toast.error(response.data.error)
          setIsLoading(false)
          // console.log(response.data.error)
        }
      }else{
       
        const response = await apiInstance.post("/patient/login", {
          phone_number:formData.mobile
         }, {
           withCredentials: true 
         });
         if(response.data.success){
          // console.log('sucess from non registered user')
       

          localStorage.setItem('formdata', JSON.stringify(formData));

          localStorage.setItem('otp_mobile',formData.mobile)
          setShowBookingOTP(true)
          // console.log('consoling from booking page ',showBookingOTP)
         }

      }
      // Reset form
      setIsLoading(false)

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mrd: "",
        mobile: "",
        appointmentDate: "",
        age: "",
        gender: "",
        address: "",

        illness: "",
      });
      setError({});
    
    }
  }catch(err){
    setIsLoading(false)
    console.log(err)
    }
    
  };
  console.log(formData,'forrmmm')

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };
console.log(doctor,'doctor from booking page ')
  // console.log(error, "errors");
  return (
    <>
      <section className="bg-gray-100 relative mt-[-40px] py-12">
      <picture>
            <source media="(min-width: 640px)" srcSet={bookingImage} />
            <img src={BookingMobileBanner} alt="Doctor banner" className="w-full object-cover" />
          </picture>
        {/* <h1 className="sm:text-6xl text-3xl absolute top-1/2 right-10 font-extrabold text-secondaryColor">
          Book an Appointment
        </h1> */}
      </section>

      <section className="bg-purple-50 py-12">
        <div className="flex flex-col justify-center lg:flex-row gap-8">
          <div className="lg:w-3/4 bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-secondaryColor mb-8">
              Appointment Booking
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Age Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-secondaryColor"
                    >
                      Name
                      <span className="text-redColor">*</span>
                    </label>
                    <input
                      type="text"
                      //   disabled={true}
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      //   placeholder='gdfg'
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    />
                    {error.firstName && (
                      <p className="text-redColor text-xs mt-1">
                        {error.firstName}
                      </p>
                    )}
                  </div>
                </div>

                {/* <div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondaryColor">
                      Last Name
                      <span className='text-redColor'>*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.lastName}
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    />
                    {error.lastName && <p className="text-redColor text-xs mt-1">{error.lastName}</p>}
                  </div>
                </div> */}
                <div>
                  <div>
                    <label
                      htmlFor="appointmentDate"
                      className="block text-sm font-medium text-secondaryColor"
                    >
                      Select A Day
                      <span className="text-redColor">*</span>
                    </label>
                    {/* <input
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    /> */}

                    <select
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      id="appointmentDate"
                      name="appointmentDate"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    >
                      <option>Select</option>
                      {/* <option value={"mon"}>MON</option>  
                      <option value={"tue"}>TUE</option>
                      <option value={"wed"}>WED</option> */}

                      {doctor?.schedules.map((item,index)=>(
                        <option value={item.day_of_week}>{item.day_of_week}</option>
                      ))}
                    </select>
                    {error.appointmentDate && (
                      <p className="text-redColor text-xs mt-1">
                        {error.appointmentDate}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-secondaryColor"
                    >
                      Email
                      <span className="text-redColor">*</span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.email}
                      type="text"
                      id="email"
                      name="email"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    />
                    {error.email && (
                      <p className="text-redColor text-xs mt-1">
                        {error.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-secondaryColor"
                    >
                      Mobile
                      <span className="text-redColor">*</span>
                    </label>
                    {loginUser ? (
                      <input
                        // onChange={handleChange}
                        value={loginUser}
                        type="number"
                        id="lastName"
                        name="lastName"
                        readOnly
                        className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                      />
                    ) : (
                      <input
                        onChange={handleChange}
                        value={formData.mobile}
                        type="number"
                        id="mobile"
                        name="mobile"
                        className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                      />
                    )}

                    {error.mobile && (
                      <p className="text-redColor text-xs mt-1">
                        {error.mobile}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* MRD No and Age Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div>
                    <label
                      htmlFor="mrd"
                      className="block text-sm font-medium text-secondaryColor"
                    >
                      MRD No (if any)
                    </label>
                    <input
                      value={formData.mrd}
                      onChange={handleChange}
                      type="text"
                      id="mrd"
                      name="mrd"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    />
                    {error.mrd && (
                      <p className="text-redColor text-xs mt-1">{error.mrd}</p>
                    )}
                  </div>
                </div>

                <div>
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-sm font-medium text-secondaryColor"
                    >
                      Age
                      <span className="text-redColor">*</span>
                    </label>
                    <input
                      value={formData.age}
                      onChange={handleChange}
                      type="number"
                      id="age"
                      name="age"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    />
                    {error.age && (
                      <p className="text-redColor text-xs mt-1">{error.age}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Gender and Date Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-secondaryColor"
                    >
                      Gender
                      <span className="text-redColor">*</span>
                    </label>
                    <select
                      value={formData.gender}
                      onChange={handleGenderChange}
                      id="gender"
                      name="gender"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    >
                      <option>Select</option>
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
                      <option value={"other"}>Other</option>
                    </select>
                    {error.gender && (
                      <p className="text-redColor text-xs mt-1">
                        {error.gender}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-secondaryColor"
                    >
                      Address
                    </label>
                    <input
                      value={formData.address}
                      onChange={handleChange}
                      type="text"
                      id="address"
                      name="address"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               

                {/* <div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-secondaryColor">
                      Country
                      <span className='text-redColor'>*</span>
                    </label>
                    <select
                      value={formData.country}
                      onChange={handleChange}
                      id="country"
                      name="country"
                      className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    >
                      <option value="">Select your country</option>
                      <option value="country1">Country 1</option>
                      <option value="country2">Country 2</option>
                     
                    </select>
                    {error.country && <p className="text-redColor text-xs mt-1">{error.country}</p>}
                  </div>
                </div> */}
              </div>

              {/* Illness Section */}
              <div>
                <div>
                  <label
                    htmlFor="illness"
                    className="block text-sm font-medium text-secondaryColor"
                  >
                    Illness / Symptoms
                  </label>
                  <textarea
                    value={formData.illness}
                    onChange={handleChange}
                    id="illness"
                    name="illness"
                    className="mt-1 p-3 block w-full border text-textColor rounded-md shadow-sm border-thirdColor focus:border-secondaryColor active:border-secondaryColor focus:ring-0"
                    rows="3"
                  />
                </div>
              </div>

              {/* Submit Button */}
              {isLoading ? (
                <Loader/>
              ):(
                <button
                type="submit"
                disabled={isLoading}
                className="py-3 px-4 bg-thirdColor text-white font-semibold rounded-md hover:bg-secondaryColor transition duration-200"
              >
              Confirm Appointment
              </button>
              )}
            
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingPage;
