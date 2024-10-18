import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAppleAlt, faStethoscope, faPills, faHandSparkles, faSyringe, 
  faHeartbeat, faLungs, faBone, faXRay, faBrain, faVial, faVenus, 
  faFlask, faAmbulance, faDumbbell, faNotesMedical, faDna, faMale, faCut, faChild, faMicroscope 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

// Updated departments with correct FontAwesome icons
const departments = [
  { name: "Emergency Medicine(Casualty)", icon: faAmbulance },
  { name: "Clinical Nutrition", icon: faAppleAlt },
  { name: "ENT", icon: faStethoscope },
  { name: "Pharmacy", icon: faPills },
  { name: "Dermatology", icon: faHandSparkles },
  { name: "Anesthesiology", icon: faSyringe },
  { name: "Cardiology", icon: faHeartbeat },
  { name: "Pulmonology", icon: faLungs },
  { name: "Orthopaedics", icon: faBone },
  { name: "Radiology", icon: faXRay },
  { name: "Neurosurgery", icon: faBrain },
  { name: "Nephrology", icon: faVial }, // Best alternative for Nephrology
  { name: "Transfusion Medicine", icon: faVial },
  { name: "Gynecology", icon: faVenus },
  { name: "Central Laboratory & Biochemistry", icon: faFlask },
 
  { name: "Physiotherapy", icon: faDumbbell },
  { name: "General Medicine", icon: faNotesMedical },
  { name: "Endocrinology", icon: faDna },
  { name: "Urology and Andrology", icon: faMale },
  { name: "Gastroenterology", icon: faCut }, // Alternative icon for Gastroenterology
  { name: "Neurology", icon: faBrain },
  { name: "Pathology", icon: faMicroscope },
  { name: "Laparoscopic and General Surgery", icon: faCut },
  { name: "Pediatrics", icon: faChild }
];

function DepartmentModal() {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 transition duration-500 top-[100%] opacity-90 bg-white rounded-lg shadow-lg p-[70px] z-50 w-[90%] sm:w-[900px] text-black">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {departments.map((dept, index) => (
                    <Link key={index} to={`/department-detial/${dept.name}`}>
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={dept.icon} className="bg-secondaryColor text-white rounded-full p-3 text-sm" />
                            <span className="hover:text-redColor text-sm">{dept.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DepartmentModal;
