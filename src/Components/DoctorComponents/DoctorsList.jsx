import React, { useState,useEffect } from "react";
import './DoctorList.css'
import  { Link,useNavigate } from 'react-router-dom';
import apiInstance from "../../Api";

function DoctorsList() {
  const [showMoreCenters, setShowMoreCenters] = useState(false);
  const [showMoreSpecialities, setShowMoreSpecialities] = useState(false);
  const [filterByCenters, setFilterByCenters] = useState([]);
  const  [filterBySpecialities, setFilterBySpecialities] = useState([]);
  const [doctors,setDoctors] = useState([])
  const navigate = useNavigate()

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
  const handleFilterByCenters = (center) => {
    setFilterByCenters((prev) => 
      prev.includes(center)
        ? prev.filter((c) => c !== center) 
        : [...prev, center]                
    );
  };
  const handleFilterBySpecialities = (specialities)=>{
    setFilterBySpecialities((prev) => 
        prev.includes(specialities)
          ? prev.filter((c) => c !== specialities) 
          : [...prev, specialities]                
      );
  }
  const handleClear = ()=>{
    setFilterByCenters([])
    setFilterBySpecialities([])
  }

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
      // specialities:'Orthopaedics'
    },
    {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Cardiology"],
        Qualification: "MBBS, DNB (General Medicine)",
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Orthopaedics"],
        Qualification: "MBBS, DNB (General Medicine)",
        // specialities:'Orthopaedicss'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Orthopaedics"],
        Qualification: "MBBS, DNB (General Medicine)",
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Cardiology"],
        Qualification: "MBBS, DNB (General Medicine)",
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Orthopaedics"],
        Qualification: "MBBS, DNB (General Medicine)",
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Gastroenterology","Cardiology"],
        Qualification: "MBBS, DNB (General Medicine)",
        // specialities:'Orthopaedics'
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Orthopaedics","Gastroenterology"],
        Qualification: "MBBS, DNB (General Medicine)",
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
          specialities: ["Gastroenterology"],
        Qualification: "MBBS, DNB (General Medicine)",
      },
    // Add more doctor objects as needed
  ];

  const filterDoctors = Doctors.filter((doctorr)=>{
   if(filterBySpecialities.length>0){
    console.log(doctorr,'dooo')
    return doctorr.specialities.some(dept => filterBySpecialities.includes(dept));
   }else{
    return true
  }})

  const displayCenters = showMoreCenters ? centers : centers.slice(0, 5);
  const displaySpecialities = showMoreSpecialities ? specialities : specialities.slice(0, 5);

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8">
      {/* Filters Section */}
      <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-4 md:mb-0">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Filters Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg text-headingColor font-semibold">Filters</h2>
            <span onClick={handleClear} className="text-[#7A5299] cursor-pointer font-semibold">
              Clear All
            </span>
          </div>

          {/* Centers Of Excellence Section */}
          <div className="mb-6">
            <h3 className="text-md text-headingColor font-medium mb-2">Centers Of Excellence</h3>
            <ul className="space-y-2">
              {displayCenters.map((center, index) => (
                <li key={index}>
                  <input 
                    type="checkbox" 
                    id={`center${index}`} 
                    onChange={() => handleFilterByCenters(center)} 
                    checked={filterByCenters.includes(center)} 
                    className="mr-2 accent-secondaryColor" 
                  />
                  <label className="text-textColor" htmlFor={`center${index}`}>
                    {center}
                  </label>
                </li>
              ))}
            </ul>
            {!showMoreCenters && (
              <button
                onClick={() => setShowMoreCenters(true)}
                className="mt-4 text-[#7A5299] text-lg font-semibold"
              >
                View More
              </button>
            )}
            {showMoreCenters && (
              <button
                onClick={() => setShowMoreCenters(false)}
                className="mt-4 text-[#7A5299] text-lg font-semibold"
              >
                View Less
              </button>
            )}
          </div>

          {/* Specialities Section */}
          <div>
            <h3 className="text-md font-medium mb-2">Specialities</h3>
            <ul className="space-y-2">
              {displaySpecialities.map((speciality, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    onChange={()=>handleFilterBySpecialities(speciality)}
                    checked={filterBySpecialities.includes(speciality)}
                    id={`speciality${index}`}
                    className="mr-2 accent-secondaryColor"
                  />
                  <label htmlFor={`speciality${index}`}>{speciality}</label>
                </li>
              ))}
            </ul>
            {!showMoreSpecialities && (
              <button
                onClick={() => setShowMoreSpecialities(true)}
                className="mt-4 text-[#7A5299] text-lg font-semibold"
              >
                View More
              </button>
            )}

            {showMoreSpecialities && (
              <button
                onClick={() => setShowMoreSpecialities(false)}
                className="mt-4 text-[#7A5299] text-lg font-semibold"
              >
                View Less
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Doctors List Section */}
      <div className="w-full md:w-3/4 h-screen overflow-y-auto custom-scrollbar">
        <h1 className="text-4xl text-headingColor justify-center flex my font-semibold mb-9 ">
          All Doctors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDoctors.map((doctor, index) => (
            <div onClick={()=>navigate('/doctor-detials')} key={index} className="bg-white cursor-pointer p-6 rounded-lg shadow-md text-center">
              <img
                src={doctor.image}
                alt="Doctor's portrait"
                className="mx-auto mb-4 object-fit"
              />
              <h2 className="text-lg text-headingColor font-medium">{doctor.name}</h2>
              {doctor.specialities.map((dept)=>(
              <p className="text-sm font-medium  text-textColor">{`${dept},`}</p>

              ))}
              
              <p className="text-sm text-gray-600">{doctor.Qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorsList;
