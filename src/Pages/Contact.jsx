import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import KimsatImage from '../assets/images/2023-08-07.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [error,setError] = useState({
    name:'',
    email:'',
    mobile:'',
    message:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    console.log('clicked')
    e.preventDefault();
    let newError = {
        name: '',
        email: '',
        mobile: '',
        message: '',
      };
    
      // Validation
      let isValid = true;
    
      if (formData.firstName.length < 3) {
        newError.name = 'Please enter your name.';
        isValid = false;
      }
    
      if (!emailRegex.test(formData.email)) {
        newError.email = 'Please enter a valid email address.';
        isValid = false;
      }
    
      if (formData.mobile.length !== 10 || !mobileRegex.test(formData.mobile)) {
        newError.mobile = 'Please enter a valid mobile number.';
        isValid = false;
      }
    
      if (formData.message.trim().length < 5) {
        newError.message = 'Message is too short..!';
        isValid = false;
      }
    
      // Set all errors at once
      setError(newError);
    
      // If the form is valid, proceed with further actions
      if (isValid) {
        console.log('done successfully');
        setError({
            name: '',
            email: '',
            mobile: '',
            message: '',
        })
        
    setFormData({
        firstName: '',
        email: '',
        mobile: '',
        message: '',
    })
        // Reset form or send email
        // EmailJS code or form reset here...
      }
    
    // // Send email using EmailJS
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    //   .then((response) => {
    //     console.log('Email sent successfully!', response.status, response.text);
    //     // Optionally reset the form
    //     setFormData({
    //       firstName: '',
    //       email: '',
    //       mobile: '',
    //       message: '',
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Failed to send email:', error);
    //   });
  };
const handleNavigate = ()=>{
window.open('https://maps.app.goo.gl/Vra6v6SSrRLY8CCc6')
}
  return (
    <>

    <div className="bg-cover bg-center min-h-screen flex items-center justify-center relative"
         style={{ backgroundImage: `url(${KimsatImage})` }}>
      <div className="absolute inset-0 bg-gray-600 bg-opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white bg-opacity-40 backdrop-blur-sm flex flex-col items-start justify-around rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
          <ul className='flex flex-col gap-4'>
            <li className="mb-4">
              <i className="fas p-3 rounded-full bg-thirdColor hover:bg-secondaryColor fa-phone mr-2"></i>
              <span className="font-semibold">Phone Number</span>: +914792890035
            </li>
            <li className="mb-4">
              <i className="fas fa-envelope p-3 rounded-full bg-thirdColor hover:bg-secondaryColor mr-2"></i>
              <span className="font-semibold">Follow us</span>: kimsatcare@gmail.com
            </li>
            <li className="mb-4">
              <i className="fas fa-map-marker-alt p-3 rounded-full bg-thirdColor hover:bg-secondaryColor mr-2"></i>
              <span className="font-semibold">Locate Us</span>: Mutti speciality hospital, Kollam
            </li>
          </ul>
          <button onClick={handleNavigate} className="bg-thirdColor hover:bg-secondaryColor text-white font-semibold py-2 px-6 rounded-lg ">
            Get Directions
          </button>
        </div>

        {/* Contact Form */}
        <div className="bg-white bg-opacity-40 z-1 backdrop-blur-sm rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold z-50 mb-4">Contact Us</h3>
          <form className=" z-50 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">First name</label>
                <input type="text" id="first_name" name="firstName" value={formData.firstName} onChange={handleChange} className="p-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 text-white" placeholder="John"  />
                {error.name&&<span className='text-redColor mt-5'>{error.name}</span>}
              </div>
             <div>
                <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-white">Mobile</label>
                <input type="number" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="p-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 text-white" placeholder="1234567890"  />
                {error.mobile&&<span className='text-redColor mt-2'>{error.mobile}</span>}
              </div>
            </div>

            <div className=" gap-4">
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="p-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 text-white" placeholder="john@example.com"  />
               

              </div>
              {error.email&&<span className='text-redColor'>{error.email}</span>}
            </div>

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm rounded-lg bg-white bg-opacity-20 border border-gray-300 text-white"
              placeholder="Write your thoughts here..."
            ></textarea>
                {error.message&&<span className='text-redColor'>{error.message}</span>}

<div>
<button  type="submit" className="bg-thirdColor hover:bg-secondaryColor text-white py-3 px-6 rounded-lg ">
              Submit
            </button>
</div>
            
          </form>
        </div>
      </div>
    </div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7885.420660452496!2d76.91198849357912!3d8.813260300000021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05dbdbcda8977b%3A0x52b7009d2433dcd2!2sKimsat%20Hospital!5e0!3m2!1sen!2sin!4v1727163283203!5m2!1sen!2sin"
        width="800"
        height="600"
        className="border-0 w-screen"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Contact;
