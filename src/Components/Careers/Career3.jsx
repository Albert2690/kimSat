import React, { useState } from 'react';
import './Career3.css'

function Career3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    nationality: '',
    phone: '',
    resume: null,
    captcha: '',
  });

  const [errors, setErrors] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email Address is required';
    if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
     
      }
    if (!formData.age  || formData.age.length>3) newErrors.age = 'Age is required';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (formData.phone.length!==10) newErrors.phone = 'Phone No. is required';
    if (!formData.resume) newErrors.resume = 'Resume file is required';
    if (!captchaVerified) newErrors.captcha = 'Captcha verification is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form submission
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
    }
  };

  const handleCaptcha = () => {
    // Simulate captcha verification
    setCaptchaVerified(true);
    alert('Captcha verified successfully!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl text-headingColor font-bold mb-4">Make a life with KIMSAT</h1>
          <p className="para">
             We make it our mission to find people who make a difference in everyday life. At KIMSAT KOLLAM, we offer wide possibilities for innovative and talented employees to enjoy their career and pave their path with personal growth and success. Kindly fill the below form to add your CV to our extensive database. Good luck! 
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>

          
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="border border-gray-300 p-2 rounded w-full"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="text-xs text-redColor">{errors.name}</p>}
            </div>
            <div>
            <input
              type="text"
              name="email"
              placeholder="Email Address *"
              className="border border-gray-300 p-2 rounded w-full"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-xs text-redColor">{errors.email}</p>}
            </div>
            <div>
            <input
              type="text"
              name="age"
              placeholder="Age *"
              className="border border-gray-300 p-2 rounded w-full"
              value={formData.age}
              onChange={handleInputChange}
            />
            {errors.age && <p className="text-xs text-redColor">{errors.age}</p>}
            </div>
            <div>
            <input
              type="text"
              name="nationality"
              placeholder="Nationality *"
              className="border border-gray-300 p-2 rounded w-full"
              value={formData.nationality}
              onChange={handleInputChange}
            />
            {errors.nationality && <p className="text-xs text-redColor">{errors.nationality}</p>}
            </div>
            <div>
            <input
              type="number"
              name="phone"
              placeholder="Phone No.*"
              className="border border-gray-300 p-2 rounded w-full"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <p className="text-xs text-redColor">{errors.phone}</p>}
            </div>

            <div className="flex items-center">
              <input
              
                type="file"
                className="border border-gray-300 p-2 rounded w-full"
              
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
              <div className='flex gap-2 w-full items-center'>
              <button
                type="button"
                className="bg-thirdColor text-white p-2 rounded ml-2"
                onClick={() => document.querySelector('input[type="file"]').click()}
              >
                Browse
              </button>
              {errors.resume && <p className="text-xs hidden sm:flex text-redColor">{errors.resume}</p>}
              </div>
           
            </div>
            {errors.resume && <p className="text-xs flex sm:hidden text-redColor">{errors.resume}</p>}
          </div>

          <p className="text-xs text-redColor">Note: Supports only .pdf, .doc.</p>

          {/* <div className="flex items-center space-x-4">
            <img
              src="https://placehold.co/100x40?text=Captcha"
              alt="Captcha image"
              className="border border-gray-300"
              onClick={handleCaptcha}
            />
            <input
              type="text"
              name="captcha"
              className="border border-gray-300 p-2 rounded w-32"
              value={formData.captcha}
              onChange={handleInputChange}
              placeholder="Enter Captcha"
            />
            {errors.captcha && <p className="text-xs text-redColor">{errors.captcha}</p>}
          </div> */}

          <button type="submit" className="bg-redColor text-white p-2 rounded w-32">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Career3;
