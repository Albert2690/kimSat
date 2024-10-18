import React, { useState } from 'react';
import './Career3.css';
import apiInstance from '../../Api';
import { toast } from 'react-toastify';

function Career3({job}) {
  const [jobb,setJob]= useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    nationality: '',
    phone: '',
    resume: null,
   
  });
// console.log(job,'job openings')
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
console.log(jobb,'jobiedddd')
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = 'Name is required';
    if (!job) newErrors.job = 'select a job role ';
    if (!formData.email) newErrors.email = 'Email Address is required';
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.age || isNaN(formData.age) || formData.age <= 0 || formData.age.length > 3) {
      newErrors.age = 'Please enter a valid age';
    }
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.resume) newErrors.resume = 'Resume file is required';
    // if (!captchaVerified) newErrors.captcha = 'Captcha verification is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('button clicked resume')
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('age', formData.age);
        formDataToSend.append('nationality', formData.nationality);
        formDataToSend.append('phone_number', formData.phone);
        // formDataToSend.append('job',job);

        formDataToSend.append('resume', formData.resume);
        console.log(formDataToSend,'formmm')

        const response = await apiInstance.post(`/content/jobs/${jobb}/apply`, formDataToSend, {
          withCredentials: true,
        });

        console.log(response.data);
        // alert();
        if(response.data.success){
          setFormData({
            name: '',
    email: '',
    age: '',
    nationality: '',
    phone: '',
    resume: null,
    captcha: '',
    
          })
          setJob('')
          toast.success('Application submitted successfully!')
        }else{
          toast.error('Application failed to submit. Please try again')
        }
        
      } catch (err) {
        console.log(err);
        toast.error('An error occurred while submitting the form.')
        // alert();
      }
    }
  };

  const handleJob = (opening) => {
    if(opening!==''){
      console.log('setting')
      setJob(opening)

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <div className="mb-8">
          <h1 className="text-2xl text-secondaryColor font-bold mb-4">Make a life with KIMSAT</h1>
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
            <div>
             <select 
             value={formData.job}
             onChange={(e)=>handleJob(e.target.value)}
             name="job"
             className="border border-gray-300 p-2 rounded w-full"  id="">
              <option 
              
              value="">Select Jobs</option>
              {job?.map((jobs)=>(
                <option value={jobs.id}>{jobs.job}</option>
              ))}
             </select>
             {errors.job && <p className="text-xs text-redColor">{errors.job}</p>}
            </div>

            <div className="flex  items-center">
              <input
                type="file"
                className="border border-gray-300 p-2 rounded w-full"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
              <div className="flex gap-2 w-full items-center">
                <button
                  type="button"
                  className="bg-thirdColor text-white p-2 rounded ml-2"
                  onClick={() => document.querySelector('input[type="file"]').click()}
                >
                  Browse
                </button>
                {errors.resume && <p className="text-xs hidden sm:flex  text-redColor">{errors.resume}</p>}
              </div>
            </div>
            {errors.resume && <p className="text-xs flex sm:hidden text-redColor">{errors.resume}</p>}
          </div>

          <p className="text-xs text-redColor">Note: Supports only .pdf, .doc.</p>

          <button type="submit" className="bg-redColor text-white p-2 rounded w-32">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Career3;
