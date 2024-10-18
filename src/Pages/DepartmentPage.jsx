import React,{useState,useEffect} from "react";
import Department1 from "../Components/DepartmentComponents/Department1";
import apiInstance from "../Api";
import DepartmentPageImage from "../assets/images/WhatsApp Image 2024-10-02 at 11.29.28 AM.jpeg";

function DepartmentPage() {
  const [departments,setDepartments] = useState([])

  useEffect(()=>{
    window.scroll(0,{
      behaviour:'smooth'
    })
      const handleApi = async()=>{
        try{
          const response = await apiInstance.get('department/detail/list')
          console.log(response.data,'data from department detailed page')
          if(response.data.success){
            setDepartments(response.data.department_list)
            // setDoctors(response.data.department_details.doctors)
          }
        }catch(err){
          console.log(err)
        }
      
      }
      handleApi()
    },[])
  console.log(departments,'dept from  department page')

  return (
    <>
      <section className="mt-0  sm:mt-[-20px]">
        {/* <div className="relative flex justify-center"> */}
        {/* <div className="relative w-full h-screen">
    <img src={DepartmentPageImage} alt="" className='sm:w-screen sm:h-screen ' />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-98"></div>
  </div> */}

        <div className="w-full">
          <img
            src={DepartmentPageImage}
            alt="Medical team in an operating room"
            className="w-full h-[550px] object-cover"
          />
        </div>
        {/* <h2 className='absolute top-1/2 left-1/4 text-8xl text-white font-bold z-10'>Departments</h2> */}
        {/* </div> */}
      </section>
      <div className="p-5 mt-[-20px] sm:p-16 ">
        <Department1 departments={departments} />
      </div>
    </>
  );
}

export default DepartmentPage;
