import React from 'react'
import DepartmentCard from './DepartmentCard';


const departments = [
    {
        title: "Emergency Medicine",
        description: "Kimsat Hospital Operates A State-Of-The-Art Emergency Department Staffed By Highly Skilled Emergency Physicians, Nurses, And Support Staff Who Are Dedicated To Providing Swift And Comprehensive Care To Patients In Urgent Medical Need.",
        icon: "fas fa-ambulance"
    },
    {
        title: "General Medicine",
        description: "KIMSAT Strives For, And Is Committed To Provide “Complete Healing”, And The Department Of General Medicine Plays A Pivotal Role In It. The Highly Experienced Physicians In KIMSAT Intensely Examine The Patients And Make Preliminary Diagnosis. High-Priority Treatment Is Started With The Intention Of Holistic Cure.",
        icon: "fas fa-stethoscope"
    },
    {
        title: "General & Laparoscopic Surgery",
        description: "KIMSAT’s Department Of General & Laparoscopic Surgery Focused On Delivering Comprehensive Support For Surgical Ailments And Emergencies. Apart From Treating Minor Swellings, Each Surgeon Staffed At KIMSAT Hospital Is Adept At Complex Abdominal Surgeries And Trauma Cases.",
        icon: "fas fa-syringe"
    },
    {
        title: "Cardiology",
        description: "KIMSAT Is A Leading Center For Cardiac Care, Where Experienced Faculty And Advanced Facilities Converge. Our Department Of Cardiology Epitomizes Sophistication, Addressing Diagnostic, Interventional, Therapeutic, And Preventive Aspects Of Cardiac Health.",
        icon: "fas fa-heartbeat"
    },
    {
        title: "ENT",
        description: "Kimsat Hospital Houses A Dedicated ENT Department Staffed By Experienced Otolaryngologists, Audiologists, Speech Therapists, And Allied Health Professionals Committed To Delivering Personalized And Effective Treatment.",
        icon: "fas fa-deaf"
    },
    {
        title: "Gynaecology",
        description: "The Department Of Obstetrics & Gynaecology At KIMSAT Offers Holistic Women’s Health Care. The Department Caters To Antenatal And Postnatal Issues, Infertility Management, Menopause Management, Family Planning, High Risk Obstetric Services, Screening For Genital Cancers, Elective Gynecology And Endoscopy Services.",
        icon: "fas fa-female"
    },
    {
        title: "Pediatrics",
        description: "Kimsat Hospital Offers A Comprehensive Range Of Services Tailored To Meet The Unique Healthcare Needs Of Children From Infancy Through Adolescence.",
        icon: "fas fa-baby"
    },
    {
        title: "Orthopedics",
        description: "The Department For Orthopedics At KIMSAT Deals With All Sorts Of Muscle, Bone And Joint Disorders. Our Orthopedists Are Experts In Arthritis, Physical Medicine, Spine Surgery, And Sports Medicine.",
        icon: "fas fa-bone"
    },
    {
        title: "Neuromedicine",
        description: "Our Experts Are Proficient In Managing A Wide Range Of Neurological Conditions, Including Stroke, Epilepsy, Parkinson’s Disease, Headache, Spinal Problems Like Backache And Neck Pain, Multiple Sclerosis.",
        icon: "fas fa-brain"
    }
];


function Department1() {
  return (
   
                <div className="container bg-purple-50 mx-auto py-12">
                    <h1 className="text-4xl font-bold text-headingColor text-center mb-12">Our Departments</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {departments.map((dept, index) => (
                            <DepartmentCard key={index} {...dept} />
                        ))}
                    </div>
                </div>
  )
}

export default Department1