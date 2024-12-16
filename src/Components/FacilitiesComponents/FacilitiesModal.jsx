import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmbulance,
  faStethoscope,
  faHeartbeat,
  faVial,
  faLungs,
  faBaby,
  faBone,
  faCut,
  faXRay,
  faTint,
  faBed,
  faHeart,
  faHospital,
  faProcedures,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const facilities = [
  { name: "Facilities Overview", icon: faHospital },
  { name: "Catheterization Laboratory (Cath Lab)", icon: faHeartbeat },
  { name: "Microbiology Laboratory", icon: faVial },
  { name: "Painless Ear Piercing", icon: faProcedures }, // Best fit
  { name: "Ultrasound Scan", icon: faHeartbeat }, // Best fit for scanning
  { name: "Pulmonary Function Test (PFT)", icon: faLungs },
  { name: "Ambulatory Blood Pressure Monitoring", icon: faHeartbeat },
  { name: "Painless Delivery", icon: faBaby },
  { name: "Cardiology Diagnostic Services", icon: faStethoscope },
  { name: "Knee and Hip Replacement", icon: faBone },
  { name: "Key Hole Surgical Procedures", icon: faCut },
  { name: "Digital X-Ray", icon: faXRay },
  { name: "Dialysis Unit", icon: faTint },
  { name: "Labour Room Complex", icon: faBed },
  { name: "Operation Theatre (OT)", icon: faHeart },
  { name: "NEO NATAL ICU (Intensive Care Unit)", icon: faHospital },
  { name: "SICU & Post-Operative Ward", icon: faProcedures },
  { name: "MICU", icon: faHeart },
  { name: "PICU", icon: faHeart },
  { name: "CCU (Coronary Care Unit)", icon: faHeart },
 
];

function FacilitiesModal() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 transition duration-500 opacity-90 top-[100%] bg-white rounded-lg shadow-lg p-16 z-50 w-[90%] sm:w-[900px] text-black">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {facilities.map((facility, index) => (
          <Link to={`/facility-detial/${facility.name}`} key={index}>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={facility.icon}
                className="bg-secondaryColor opacity-90 text-white rounded-full p-3 text-sm"
              />
              <span className="hover:text-redColor text-sm">{facility.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FacilitiesModal;
