import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DepartmentDetialedPage.css"; // Ensure you have the correct file name here
import DepartmentDetialed3 from "../Components/DepartmentComponents/DepartmentDetialed3";
import DepartmentBanner from "../assets/images/cardiology.jpg";
import CommonGallery from "../Components/CommonGallery";
import image1 from '../assets/images/Rectangle 36-3.png'
import apiInstance from "../Api";
// import { Link } from 'react-router-dom';
const defaultDoctorImage = "https://via.placeholder.com/150"; // Default image for doctors

function DepartmentDetailedPage() {
  const { name } = useParams();
  const [images] = useState([image1,image1,image1,image1,image1,image1])
  console.log(name, "deaprtmen-detialt");
  const [department, setDepartment] = useState(null); // Initialize as null
  const [doctors, setDoctors] = useState([]);
  const [cards, setCards] = useState([]);
  const [heading, setHeading] = useState("Doctors");

  useEffect(() => {
    window.scroll(0, {
      behaviour: "smooth",
    });
    const handleApi = async () => {
      try {
        const response = await apiInstance.get(`/department/details/${name}`);
        if (response.data.success) {
          setDepartment(response.data.department_details);
          setDoctors(response.data.department_details.doctors);
          setCards(response.data.department_details.card);
          if (response.data.department_details.clinical_nutrition) {
            setHeading("Nutritions");
          }
        }
      } catch (error) {
        console.error("Error fetching department details:", error);
      }
    };
    handleApi();
  }, [name]);

  console.log(department, "department");
  return (
    <>
      {department ? (
        <div className="relative">
          {/* Department Banner */}
          <div className="w-full">
            <img
              src={department?.photo}
              alt="Department Banner"
              className="object-cover"
            />
          </div>

          {/* Department Name Section */}
          <section className="p-4 sm:p-8 relative">
            <div className="absolute bg-thirdColor top-0 left-0 w-full h-full"></div>
            <div className="px-5 sm:px-16 relative z-10">
              <h1 className="text-xl sm:text-4xl text-white font-bold flex items-center">
                <i className={`${department?.icon} mr-3 sm:mr-4`}></i>{" "}
                {department?.name}
              </h1>
            </div>
          </section>

          {/* Overview Section */}
          <div className="bg-purple-50  p-5 sm:p-12">
            <section className="w-full items-center p-8">
              <h2 className="text-2xl text-headingColor font-bold mb-4">
                Overview
              </h2>
              <p className="mb-4 text-justify">
                {department?.paragraph_1 || "Overview not available."}
              </p>
              <p className="mb-4 text-justify">
                {department?.paragraph_2 || ""}
              </p>
              <p className="mb-4 text-justify">
                {department?.paragraph_3 || ""}
              </p>
            </section>

            {/* Doctors List */}

            {doctors.length > 0 && (
              <>
                <h1 className="text-4xl mt-10 text-secondaryColor text-center font-bold mb-8">
                  {heading}
                </h1>
                <div className="flex justify-center">
                  <div className="w-full  mt-10 max-h-[700px] overflow-y-auto custom-scrollbar p-8">
                    {/* <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center mx-auto">
          {doctors.map((doctor, index) => (
            <Link to={`/doctor-details/${doctor.id}`} key={index}>
              <div className="card cursor-pointer mx-auto">
                <img
                  src={doctor.photo || defaultDoctorImage}
                  alt={`${doctor.name}'s portrait`}
                  className="w-full h-56 object-cover rounded-md shadow-md"
                />
                <div className="content p-4 bg-white rounded-b-md">
                  <h3 className="text-sm text-headingColor font-medium">{doctor.name}</h3>
                  <p className="text-sm text-textColor font-semibold">{doctor.specializations || 'N/A'}</p>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

                    <div className="container flex flex-wrap gap-16 justify-center items-center mx-auto">
                      {doctors.map((doctor, index) => (
                        <Link to={`/doctor-details/${doctor.id}`} key={index}>
                          <div className=" cursor-pointer mx-auto">
                            <img
                              src={doctor.photo || defaultDoctorImage}
                              alt={`${doctor.name}'s portrait`}
                              className="w-full h-56 object-cover rounded-md shadow-md"
                            />
                            <div className=" text-center p-4 bg-white rounded-b-md">
                              <h3 className="text-lg text-headingColor font-medium">
                               {`Dr. ${doctor.name}`} 
                              </h3>
                              <p className="text-sm text-textColor font-semibold">
                                {doctor.specializations || "N/A"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Additional Component */}
          <DepartmentDetialed3 cards={cards} />

          <CommonGallery page={department?.name} Images={images} />
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
