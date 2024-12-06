import React, { useState,useEffect } from 'react'
import Career3 from '../Components/Careers/Career3'
import CareerImage from '../assets/images/covid19-preventing-virus-health-healthcare-workers-quarantine-concept-professional-female-nurse-doctor-blue-scrubs-medical-mask-gloves-writing-down-patient-info-using-clipboard.jpg'
import Career2 from '../Components/Careers/Career2'
import Career4 from '../Components/Careers/Career4'
import apiInstance from '../Api'

function Career() {

  const [jobs,setjobs] = useState([])
  useEffect(() => {

    window.scroll(0,{
      behaviour:'smooth'
    },[])
    const handleApi = async () => {
      try {
        const response = await apiInstance.get('/jobs');
        if (response.data.success) {
          setjobs(response.data.job_openings);
        
        }
      } catch (error) {
        console.error("Error fetching job openings ..!",error);
      }
    };
    handleApi();
  }, [name]);

  return (
  <>
   <div className="w-full relative">
        <img src={CareerImage} alt="Medical team in an operating room" className="w-full h-[450px] object-cover" />
        <div>
          <h1 className=' absolute top-1/2 left-20 text-4xl sm:text-8xl font-bold text-secondaryColor'>Careers</h1>
        </div>

    </div>
    <Career4/>
    <div className='flex flex-col sm:flex-row  items-center justify-around'>
    <Career2 openings={jobs} />
    <Career3 job={jobs}/>
  
    {/* <div className="p-10">
    <h1 className="text-3xl font-bold text-gray-700 mb-6">Current Openings</h1>
    <ul className="space-y-4 text-gray-600">
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Staff Nurse</li>
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Charge Nurse</li>
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Physician Assistant</li>
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Deputy Manager/Manager - Branding</li>
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Executive/Junior Executive</li>
    </ul>
</div> */}
    </div>
 
  </>
  )
}

export default Career