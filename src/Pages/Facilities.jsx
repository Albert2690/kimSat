import React,{useState,useEffect} from 'react'
import Facilities1 from '../Components/FacilitiesComponents/Facilities1'
import KimsatImage from '../assets/images/facbanner.jpg'
import imagee from '../assets/images/Facility.jpg'
import apiInstance from '../Api'



function Facilities() {
  const [facilites,setfacilites] = useState([])

  useEffect(()=>{
      const handleApi = async()=>{
        try{
          const response = await apiInstance.get('facilities/list')
          console.log(response.data,'data from department detailed page')
          if(response.data.success){
            setfacilites(response.data.data)
            // setDoctors(response.data.department_details.doctors)
          }
        }catch(err){
          console.log(err)
        }
      
      }
      handleApi()
    },[])
  console.log(facilites,'dept from  department page')

  return (
    <>
    

    <div className='bg-purple-50 '>
     <section className=''>
      <div className="flex justify-center">
        <img src={KimsatImage} alt="" className=' object-cover ' />
      </div>
    </section>
    <h1 className="text-4xl sm:text-6xl font-bold text-headingColor text-center mt-8">Our Facilities</h1>
    <div className='p-5  sm:p-16 '>
        <Facilities1 facilities={facilites} />
    </div>
    </div>
   
   </>
  )
}

export default Facilities