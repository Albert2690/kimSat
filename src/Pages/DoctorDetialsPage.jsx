import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import apiInstance from '../Api';
import { toast } from 'react-toastify';

function DoctorDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [doctor, setDoctor] = useState();
  const [tab, setTab] = useState('Overview');
  const [isValidId, setIsValidId] = useState(true);

  // Check if the ID is valid
  useEffect(() => {
    if (id.length !== 36) {
      setIsValidId(false);
      navigate('/404error');
    }

    window.scroll(0,{
      behaviour:'smooth'
    })
  }, [id, navigate]);

  // Fetch doctor details from the API
  useEffect(() => {
    if (!isValidId) return;

    const handleDoctorApi = async () => {
      try {
        const otpResponse = await apiInstance.get(`doctors/${id}`, {
          withCredentials: true,
        });
        if (otpResponse.data.success) {
          setDoctor(otpResponse.data.data);
        } else {
          toast.error(otpResponse.data.error);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleDoctorApi();
  }, [id, isValidId]);

  const formatTime = (time) => {
    if (!time) return 'N/A';
    const [hours, minutes] = time.split(':');
    // const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} `;
  };

  if (!isValidId) {
    return null;
  }

  return (
    <div className="mx-auto bg-white shadow-sm">
      <div className="flex bg-[#F8F8F8] p-5 sm:p-16 gap-5 flex-col md:flex-row">
        <div className='flex justify-center'>
        <img src={doctor?.photo} alt="Doctor" className='sm:w-[250px] sm:h-[200px] w-[300px] h-[300px] rounded-lg object-cover' />
        </div>
        <div className="text-center ml-0 sm:ml-10 sm:flex sm:flex-row md:justify-start sm:gap-16 sm:items-end w-full md:text-left md:mt-0">
          <div>
            <h1 className="text-2xl text-headingColor font-bold">Dr.{doctor?.user?.username || 'N/A'}</h1>
            <div className='flex sm:flex-row flex-col sm:gap-2'>
              {doctor?.qualifications.length > 0 ? (
                doctor.qualifications.map((quali) => (
                  <p key={quali.id} className="mt-1 text-lg text-secondaryColor">{quali.qualification || 'N/A'}</p>
                ))
              ) : (
                <p className="mt-2 text-lg text-secondaryColor">Qualifications Not Available</p>
              )}
            </div>
            <p className="text-textColor text-sm">{doctor?.specialization[0]?.name}</p>
            <p className="text-textColor text-sm">Speciality: {doctor?.specialization[0]?.department_name || 'N/A'}</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row items-center md:items-start">
            <Link to={`/booking/${id}`}>
              <button className="hover:bg-secondaryColor bg-thirdColor text-white px-4 py-2 rounded-full flex space-x-2 items-center mb-2 md:mb-0 group transition-all duration-300 ease-in-out">
                <span>Book an Appointment</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="p-2 text-white rounded-full transform transition-transform duration-1000 group-hover:translate-x-2"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 p-5 sm:p-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <ul className="space-y-4 text-center md:text-left">
              {['Overview', 'Qualification', 'Work Experience', 'Schedule'].map((tabName) => (
                <li
                  key={tabName}
                  className={`cursor-pointer p-4 ${tab === tabName ? 'bg-[#F8F8F8] text-start font-bold text-headingColor' : ' text-start text-textColor'}`}
                  onClick={() => setTab(tabName)}
                >
                  {tabName}
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="w-full md:w-3/4 mt-4 md:mt-0 md:pl-10">
            {tab === 'Overview' && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              >
                <h2 className="text-xl text-headingColor font-bold">Overview</h2>
                <p className="mt-4 para text-lg transition">{doctor?.bio || 'Bio Not Available'}</p>
              </motion.div>
            )}

            {tab === 'Qualification' && (
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              >
                <h2 className="text-xl text-headingColor font-bold">Qualification</h2>
                <div className="mx-auto mt-10">
                  <div className="space-y-4">
                    {doctor?.qualifications.length > 0 ? (
                      doctor.qualifications.map((quali) => (
                        <div key={quali.id} className="flex items-start">
                          <div className="border-l-2 border-secondaryColor h-6 mr-2"></div>
                          <div>
                            <h2 className="text-lg font-medium text-headingColor">{quali.qualification || 'N/A'}</h2>
                            <p className="para">{quali.place || 'N/A'}, || {quali.date ? quali.date.substring(0, 4) : 'N/A'}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-lg text-secondaryColor">Qualifications Not Available</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {tab === 'Work Experience' && (
              <div>
                <h1 className="text-xl  font-semibold mb-4">Work Experience</h1>
                {doctor?.work_experiences?.length > 0 ? (
                  doctor.work_experiences.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 1.1, ease: "easeInOut" }}
                      className="p-8 my-5 justify-center"
                    >
                      <div className="mb-4 p-4 bg-thirdColor hover:bg-secondaryColor text-white max-w-[500px] border border-secondary rounded-lg">
                        <span className="block text-lg font-bold text-secondary-foreground">
                          {item.start_date.substring(0, 4)} - {item.end_date ? item.end_date.substring(0, 4) : 'Present'}
                        </span>
                        <span className="block text-md font-medium">{item.designation || 'N/A'}</span>
                        <span className="block text-sm text-muted-foreground">{item.description || 'N/A'}</span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-lg text-secondaryColor">Work Experience Not Available</p>
                )}
              </div>
            )}

{tab === 'Schedule' && (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.1, ease: "easeInOut" }}
  >
    <h2 className="text-xl text-headingColor font-bold mb-6 flex items-center gap-3">
      <FontAwesomeIcon icon={faClock} className="text-secondaryColor text-2xl" />
      Consultation Schedule
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {doctor?.schedules?.map((schedule, index) => {
        // Extracting the first and last time slots
        const startTime = schedule?.time_slots[0]?.[0] || "N/A";
        const endTime = schedule?.time_slots[schedule.time_slots?.length - 1]?.[0] || "N/A";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondaryColor bg-opacity-10 flex items-center justify-center group-hover:bg-secondaryColor transition-all duration-300">
                <h3 className="font-bold text-secondaryColor group-hover:text-white">
                  {schedule?.day_of_week?.slice(0, 2)}
                </h3>
              </div>
              <div>
                <h3 className="font-semibold text-headingColor text-lg">
                  {schedule.day_of_week}
                </h3>
                <p className="text-sm text-textColor">Available Slots</p>
              </div>
            </div>

            {/* Displaying time range properly */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <div className="w-2 h-2 bg-secondaryColor rounded-full animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon 
                    icon={faClock} 
                    className="text-secondaryColor text-sm"
                  />
                  <p className="text-textColor font-medium">
                    {formatTime(startTime)} - {formatTime(endTime)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
)}

          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetailsPage;