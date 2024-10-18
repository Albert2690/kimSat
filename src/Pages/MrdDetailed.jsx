import React, { useState, useEffect } from 'react';
import apiInstance from '../Api';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import specific icon

function MrdDetailed() {
  const [labreport, setLabreport] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState('');
  const { id } = useParams();
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: 'smooth',
    });

    const handleApi = async () => {
      try {
        const result = await apiInstance.get(`/patient/details/${id}`, { withCredentials: true });

        if (result.data.success) {
          let mobilee = localStorage.getItem('mobile');
          setMobile(mobilee);
          setBookings(result.data.appointments);
          setLabreport(result.data.lab_reports);
          setUser(result.data.patient_profile);
        } else {
          toast.error('Error while fetching patient details');
        }
      } catch (err) {
        console.error(err);
        toast.error(err.message);
      }
    };

    handleApi();
  }, [id]);

  function handleDownload(url) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'kimsat lab-report.pdf'; // Customize the file name
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => console.error('Download error:', error));
  }

  return (
    <>
      {user.name ? (
        <div className="p-5 sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-2xl text-headingColor font-semibold mb-4">Patient Details</h1>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faUser} className="mr-4 w-[100px] h-[100px] text-textColor" /> {/* Correctly added FontAwesomeIcon */}
                <div>
                  <p>
                    <strong className="text-headingColor">Name</strong> : {user.name}
                  </p>
                  <p>
                    <strong className="text-headingColor">Ph no</strong> : +91 {mobile}
                  </p>
                  {user.MRD_number && (
                    <p>
                      <strong className="text-headingColor">MRD Number</strong> :{' '}
                      <a href="#" className="text-secondaryColor">
                        {user.MRD_number}
                      </a>
                    </p>
                  )}
                  <p>
                    <strong className="text-headingColor">Age</strong> : {user.age}
                  </p>
                </div>
              </div>
              <hr className="my-4 mt-12" />
              <h2 className="text-xl font-semibold text-secondaryColor mb-4">Lab & Blood Test Report</h2>
              <div className="h-64 flex flex-col items-start overflow-x-auto">
                {labreport.map((report, index) => (
                  <div className="mb-4 flex flex-row text-center gap-5 items-center" key={index}>
                    <p>{new Date(report.created_at).toLocaleDateString()}</p>
                    <a
                      href={report.report_file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border text-xs sm:text-sm border-secondaryColor text-secondaryColor px-4 py-2 rounded-full mr-2"
                    >
                      View Report
                    </a>
                    <button
                      onClick={() => handleDownload(report.report_file)}
                      className="border text-xs sm:text-sm border-secondaryColor text-secondaryColor px-4 py-2 rounded-full"
                    >
                      <i className="fas fa-download"></i> Download Report
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-8">
              <h2 className="text-xl font-semibold text-secondaryColor mb-4">Booking History</h2>
              <div className="h-[600px] overflow-y-auto">
                {bookings.map((booking, index) => (
                  <div className="p-2 flex flex-col gap-4 mb-4" key={index}>
                    <p>Dr. {booking?.doctor?.user?.username}</p>
                    <p>Reason for visit : {booking?.reason_for_visit}</p>

                    
                    <p>Temporary Number #{booking.temporary_number}</p>
                    <p>Date {new Date(booking.appointment_date).toLocaleDateString()}</p>
                    <button className="bg-green-700 hover:bg-secondaryColor text-white max-w-[200px] px-4 py-2 rounded-full">
                      {booking.status}
                    </button>
                    <hr className="my-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>Loading .....</p>
        </div>
      )}
    </>
  );
}

export default MrdDetailed;
