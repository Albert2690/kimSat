import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiInstance from "../../Api";
import Loader from "../Loader/Loader";
import './DoctorList.css';

function DoctorsList() {
  const [showMoreCenters, setShowMoreCenters] = useState(false);
  const [showMoreSpecialities, setShowMoreSpecialities] = useState(false);
  const [filterByCenters, setFilterByCenters] = useState([]);
  const [filterBySpecialities, setFilterBySpecialities] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [specialitiess, setSpecialitiess] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleApi = async () => {
    try {
      setIsLoading(true);
      const response = await apiInstance.get("doctors/list");
      setDoctors(response.data.data);
      setSpecialitiess(response.data.department);
      setIsLoading(false);
    } catch (err) {
      console.log("Error while fetching data", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  const handleFilterBySpecialities = (speciality) => {
    setFilterBySpecialities((prev) =>
      prev.includes(speciality)
        ? prev.filter((c) => c !== speciality)
        : [...prev, speciality]
    );
  };

  const handleClear = () => {
    setFilterByCenters([]);
    setFilterBySpecialities([]);
  };

  const filterDoctors = doctors.filter((doctorr) => {
    if (filterBySpecialities.length > 0) {
      return filterBySpecialities.includes(doctorr.specialization[0]?.department_name);
    } else {
      return true;
    }
  });

  const displaySpecialities = showMoreSpecialities
    ? specialitiess
    : specialitiess.slice(0, 5);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row p-4 md:p-8">
          {/* Filters Section */}
          <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-4 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Filters Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg text-headingColor font-semibold">
                  Filters
                </h2>
                <span
                  onClick={handleClear}
                  className="text-[#7A5299] cursor-pointer font-semibold"
                >
                  Clear All
                </span>
              </div>

              {/* Specialities Section */}
              <div>
                <h3 className="text-md font-medium mb-2">Department</h3>
                <ul className="space-y-2">
                  {displaySpecialities.map((speciality, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        onChange={() => handleFilterBySpecialities(speciality)}
                        checked={filterBySpecialities.includes(speciality)}
                        id={`speciality${index}`}
                        className="mr-2 accent-secondaryColor"
                      />
                      <label htmlFor={`speciality${index}`}>{speciality}</label>
                    </li>
                  ))}
                </ul>
                {!showMoreSpecialities ? (
                  <button
                    onClick={() => setShowMoreSpecialities(true)}
                    className="mt-4 text-[#7A5299] text-lg font-semibold"
                  >
                    View More
                  </button>
                ) : (
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
            <h1 className="text-4xl text-headingColor justify-center flex my font-semibold mb-9">
              All Doctors
            </h1>

            {doctors.length < 1 && (
              <p className="flex h-[400px] text-lg font-semibold flex-col justify-center items-center">
                No doctors found
              </p>
            )}

            {doctors.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterDoctors.map((doctor, index) => (
                  <div
                    onClick={() => navigate(`/doctor-details/${doctor.id}`)}
                    key={index}
                    className="bg-white cursor-pointer p-6 rounded-lg shadow-md text-center"
                  >
                    <img
                      src={doctor.photo}
                      alt="Doctor's portrait"
                      className="mx-auto mb-4 object-cover"
                    />
                    <h2 className="text-lg text-headingColor font-medium">
                      {doctor.user.username}
                    </h2>
                    <p className="text-sm font-medium text-textColor">
                      {doctor.specialization[0]?.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorsList;
