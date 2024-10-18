import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DepartmentDetialedPage.css'; // Ensure you have the correct file name here
import DepartmentDetialed3 from '../Components/DepartmentComponents/DepartmentDetialed3';
import DepartmentBanner from '../assets/images/cardiology.jpg'
import apiInstance from '../Api';
const defaultDoctorImage = "https://via.placeholder.com/150"; // Default image for doctors

function DepartmentDetailedPage() {
  const { name } = useParams(); 

  console.log(name,'deaprtmen-detialt')
  const [department, setDepartment] = useState(null); // Initialize as null
  const [doctors, setDoctors] = useState([]);
  const [cards,setCards] = useState([])

  useEffect(() => {
    window.scroll(0,{
      behaviour:'smooth'
    })
    const handleApi = async () => {
      try {
        const response = await apiInstance.get(`/department/details/${name}`);
        if (response.data.success) {
          setDepartment(response.data.department_details);
          setDoctors(response.data.department_details.doctors);
          setCards(response.data.department_details.card);

        }
      } catch (error) {
        console.error("Error fetching department details:", error);
      }
    };
    handleApi();
  }, [name]);

  console.log(department,'department')
  return (
    <>
      {department ? (
        <div className="relative">
          {/* Department Banner */}
          <div className="w-full">
            <img src={department?.photo} alt="Department Banner" className="object-cover" />
          </div>

          {/* Department Name Section */}
          <section className="p-4 sm:p-8 relative">
            <div className="absolute bg-thirdColor top-0 left-0 w-full h-full"></div>
            <div className="px-5 sm:px-16 relative z-10">
            <h1 className="text-xl sm:text-4xl text-white font-bold flex items-center">
            <i className={`${department?.icon} mr-3 sm:mr-4`}></i> {department?.name}
            </h1>
            </div>
          </section>

          {/* Overview Section */}
          <div className="bg-purple-50  p-5 sm:p-16">
            <section className="w-full items-center p-8">
              <h2 className="text-2xl text-headingColor font-bold mb-4">Overview</h2>
              <p className="mb-4 text-justify">{department?.paragraph_1 || 'Overview not available.'}</p>
              <p className="mb-4 text-justify">{department?.paragraph_2 || ''}</p>
              <p className="mb-4 text-justify">{department?.paragraph_3 || ''}</p>
            </section>

            {/* Doctors List */}

            {doctors.length>0 && (   

         <>
            <h1 className="text-4xl mt-10 text-headingColor text-center font-semibold mb-8">Doctors</h1>
            <div className="flex justify-center">
              <div className="w-full md:w-3/4 mt-10 h-[500px] overflow-y-auto custom-scrollbar p-8">
                <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  { doctors.map((doctor, index) => (
                    <div key={index} className="card flex justify-center sm:justify-normal">
                      <img
                        src={doctor.photo || defaultDoctorImage} // Use fallback image if doctor.image is missing
                        alt={`${doctor.name}'s portrait`}
                        className="w-full h-56 object-cover rounded-md shadow-md"
                      />
                      <div className="content p-4 bg-white rounded-b-md">
                        <h3 className="text-sm text-headingColor font-medium">{doctor.name}</h3>
                        <p className="text-sm text-textColor font-semibold">{doctor.specializations || 'N/A'}</p>
                        {/* <p className="text-xs text-textColor font-semibold">{doctor.Qualification || 'N/A'}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </>
)}

          </div>
          {/* Additional Component */}
          <DepartmentDetialed3 cards={cards} />
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default DepartmentDetailedPage;
