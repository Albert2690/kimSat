import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAmbulance, faStethoscope, faCut, faHeartbeat, faFemale, 
  faChild, faBone, faBrain, faUserMd, faLungs, faDna, 
  faSpa, faWalking, faSyringe, faXRay, faMale, faVials, faPills 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const departments = [
    { icon: faAmbulance, name: "Emergency Medicine" },
    { icon: faStethoscope, name: "General Medicine" },
    { icon: faCut, name: "General & Laparoscopic Surgery" },
    { icon: faHeartbeat, name: "Cardiology" },
    { icon: faFemale, name: "Gynaecology" },
    { icon: faChild, name: "Pediatrics" },
    { icon: faBone, name: "Orthopedics" },
    { icon: faBrain, name: "Neuromedicine" },
    { icon: faUserMd, name: "Neurosurgery" },
    { icon: faLungs, name: "Pulmonology" },
    { icon: faDna, name: "Endocrine & Breast Surgeon" },
    { icon: faSpa, name: "Dermatology & Cosmetology" },
    { icon: faWalking, name: "Physiotherapy" },
    { icon: faSyringe, name: "Anaesthesiology" },
    { icon: faXRay, name: "Radiology" },
    { icon: faMale, name: "Urology and Andrology" },
    { icon: faVials, name: "Central Laboratory" },
    { icon: faPills, name: "Pharmacy" }
];

function DepartmentModal() {
    return (
        <div className="absolute left-1/2  transform -translate-x-1/2 transition duration-500 top-[100%] bg-white rounded-lg shadow-lg p-16 z-50 w-[90%] sm:w-[900px] text-black ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {departments.map((dept, index) => (
            <Link to={'/department-detial'}>
            <div key={index} className="flex items-center gap-2">
              <FontAwesomeIcon icon={dept.icon} className="bg-secondaryColor text-white  rounded-full p-3 text-sm" />
              <span className="hover:text-redColor text-sm">{dept.name}</span>
            </div>
            
            </Link>
            
          ))}
        </div>
      </div>
      
    );
}

export default DepartmentModal;
