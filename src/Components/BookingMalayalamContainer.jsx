import React, { useState,useContext,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BookingContext } from "../Layouts/Layout";
import apiInstance from "../Api";
import { Link } from "react-router-dom";

function BookingContainer({ tab, setTab }) {
 
  const  [filterBySpecialities, setFilterBySpecialities] = useState();
  const [doctors,setDoctors] = useState([])
  const [doctorId,setDoctorId] = useState()

  const [filteredDoctor,setfilteredDoctor] = useState([])
  // const navigate = useNavigate()

  const handleApi = async()=>{
    try{
    const response = await apiInstance.get('doctors/list/')
    console.log(response.data,'doctores from backend ')
    setDoctors(response.data)
    }catch(err){
      console.log("Error while  fetching data",err)

    }
  }


useEffect(()=>{
  
  handleApi()
},[])
console.log(filterBySpecialities,'filterDoctors ')
// console.log(doctors[0].bio,'doctors in doctor detial page ')
  // const handleFilterByCenters = (center) => {
  //   setFilterByCenters((prev) => 
  //     prev.includes(center)
  //       ? prev.filter((c) => c !== center) 
  //       : [...prev, center]                
  //   );
  // };
  const handleFilterBySpecialities = (specialities)=>{
    // setFilterBySpecialities((prev) => 
    //     prev.includes(specialities)
    //       ? prev.filter((c) => c !== specialities) 
    //       : [...prev, specialities]                
    //   );
    setFilterBySpecialities(specialities)
    setfilteredDoctor(Doctors.filter((doctor)=>{
      return doctor.specialities.includes(specialities)
    }))
  }


console.log(filteredDoctor,'doctors')
  console.log(filterBySpecialities,'specialities')
 
  const centers = [
    "Centre Of Orthopaedics",
    "Cancer Care",
    "Heart Care",
    "Neurosciences",
    "Gastroenterology",
    "Urology",
    "Mother & Child Care",
    "Critical Care & Pulmonology",
    "Plastic Surgery",
    "General Surgery",
  ];

  const specialities = [
    "Orthopaedics",
    "Cardiology",
    "Neurology & Brain/Spine Surgery",
    "Gastroenterology",
    "Urology",
    "Nephrology",
    "Pulmonology",
    "Plastic Surgery",
    "General Surgery",
    "Internal Medicine",
  ];

  const Doctors = [
    {
      name: "Dr. Mohammed Hussain",
      image:
        "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        specialities: ["Orthopaedics"],
      Qualification: "MBBS, DNB (General Medicine)",
      id:1,
      // specialities:'Orthopaedics'
    },
    {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Cardiology"],
        Qualification: "MBBS, DNB (General Medicine)",
        // specialities:'Orthopaedics'
        id:13,
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Orthopaedics"],
        Qualification: "MBBS, DNB (General Medicine)",
        id:15,
        // specialities:'Orthopaedicss'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Orthopaedics"],
        Qualification: "MBBS, DNB (General Medicine)",
        id:115,
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Cardiology"],
        Qualification: "MBBS, DNB (General Medicine)",
        id:1155,
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Orthopaedics"],
        Qualification: "MBBS, DNB (General Medicine)",
        id:1111,
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Gastroenterology","Cardiology"],
        Qualification: "MBBS, DNB (General Medicine)",
        id:111,
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Orthopaedics","Gastroenterology"],
        Qualification: "MBBS, DNB (General Medicine)",
        id:11,
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Gastroenterology"],
        Qualification: "MBBS, DNB (General Medicine)",
        id:2,
      },
    // Add more doctor objects as needed
  ];

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
            <select onChange={(e)=>handleFilterBySpecialities(e.target.value )} className="appearance-none border rounded-full py-2 px-4 w-full text-headingColor leading-tight focus:outline-none focus:shadow-outline">
              <option>Select Specialities</option>
              {specialities.map((speciality,index)=>(
                <option key={index}>{speciality}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/4">
          <label className="text-headingColor font-semibold mb-2">ഡോക്ടർമാർ</label>
          <div className="relative w-full">
            <select onChange={(e)=>setDoctorId(e.target.value)}  className="appearance-none border rounded-full py-2 px-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option>Select Doctors</option>
              {filteredDoctor.map((doctor,index)=>(
                <option value={doctor.id} key={index}>{doctor.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4">
        {doctorId && 
        <Link to={`/doctor-detials/${doctorId}`} >
        <button className="flex  items-center btn">
            View Profile <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </Link>
}
         
        </div>
        
       
      </div>
    </div>
  )}
  </>
    // </div>
  );
}

export default BookingContainer;
