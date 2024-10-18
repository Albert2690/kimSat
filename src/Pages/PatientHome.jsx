import React, { useEffect, useState } from 'react';
import apiInstance from '../Api';
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function PatientHome() {
  const [user, setUser] = useState(null); // Initialize as null to handle undefined case
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0,{
      behaviour:'smooth'
    })
    const token = localStorage.getItem('userToken');
    if (!token) {
      toast.error("please Login ")
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await apiInstance.get('/patient/visitor-detail', { withCredentials: true });
        if (response.data.success) {
          setData(response.data.patient_profiles);
          setUser(response.data.visitor);
        }
      } catch (err) {
        console.error(err);
      }
    };
    handleApi();
  }, []);

  // console.log(user,'user from profile')
  // [#3c3c9b]
  return (
    <div className="bg-gradient-to-br from-[#8871A9] via-[#3c3c9b] to-[#7A5299] flex justify-center min-h-[600px] items-center  w-screen">
      
      <div className="bg-white bg-opacity-5 rounded-lg p-6 md:p-8 lg:p-16shadow-lg backdrop-blur-md border border-white/30 text-center text-white w-11/12 max-w-md md:max-w-lg lg:max-w-xl">
        {user ? (
          <>
            <h1 className="text-lg md:text-xl font-bold mb-4">{`+91 ${user.phone_number}`}</h1>
            <p className="mb-8 text-sm md:text-base">Patients</p>

            {data.map((detail, index) => (
              <Link to={`/patient-profile/detail/${detail.id}`}>
                 <div key={index} className="flex cursor-pointer flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mb-4 md:mb-5">
                <span className="text-sm md:text-base">{detail.name} :</span>
                {/* {detail.mrd? && (

                  
                )} */}
                <input
                  type="text"
                  value={`M R D : ${detail.MRD_number  }`}
               
                  readOnly
                  className="border-none rounded-lg p-2 text-center bg-white text-black text-sm md:text-base"
                />
              </div>
              </Link>
           
            ))}
          </>
        ) : (
          <p>Loading...</p> // Placeholder while data is loading
        )}
      </div>
    </div>
  );
}

export default PatientHome;
