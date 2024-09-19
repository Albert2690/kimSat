import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance, faStethoscope, faHeartbeat, faVial, faUserMd, faBrain,faMars , faLungs, faDna, faHospital, faBone, faChild, faCut, faSyringe, faXRay, faPills, faParking, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";


const facilities = [
    { icon: faAmbulance, name: "Emergency Medicine" }, 
    { icon: faStethoscope, name: "Medical Service" },
    { icon: faHeartbeat, name: "24x7 ICU" }, 
    { icon: faAmbulance, name: "24x7 Ambulance With ICU" }, 
    { icon: faVial, name: "24x7 Laboratory Service" }, 
    { icon: faChild, name: "24x7 Dialysis" }, 
    { icon: faPills, name: "24x7 Pharmacy" }, 
    { icon: faXRay, name: "24x7 CT Scan" }, 
    { icon: faUserMd, name: "24x7 X-RAY & ECG" }, 
    { icon: faLungs, name: "24x7 Ultra Sound Scan" }, 
    { icon: faDna, name: "Endoscopy & PFT" }, 
    { icon: faParking, name: "Car Parking Facilities" }, 
    { icon: faUtensils, name: "Canteen" }, 
    { icon: faWifi, name: "Free Wifi & Telephone Facility" }, 
   
];

function FacilitiesModal() {
    return (
        <div className="absolute left-1/2  transform -translate-x-1/2 transition duration-500 top-[100%] bg-white rounded-lg shadow-lg p-16 z-50 w-[90%] sm:w-[900px] text-black ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {facilities.map((dept, index) => (
            <Link to={'/faciity-detial'}>
            <div key={index} className="flex items-center gap-3">
              <FontAwesomeIcon icon={dept.icon} className="bg-secondaryColor text-white  rounded-full p-3 text-sm" />
              <span className="hover:text-redColor text-sm">{dept.name}</span>
            </div>
            
            </Link>
            
          ))}
        </div>
      </div>
      
    );
}

export default FacilitiesModal;
