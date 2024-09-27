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
        <div className="bg-gray-700 bg-opacity-40 z-1 backdrop-blur-sm rounded-xl shadow-lg p-8 text-white">
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
      {/* <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DARirHQCa-u/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DARirHQCa-u/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DARirHQCa-u/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Bashid Bro (@bashidbro)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script> */}
    </>
  );
}

export default Contact;
