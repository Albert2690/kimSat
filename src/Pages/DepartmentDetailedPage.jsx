import React from 'react';
import { useParams } from 'react-router-dom';
import './DepartmentDetialedPage.css'; // Ensure you have the correct file name here
import DepartmentDetialed3 from '../Components/DepartmentComponents/DepartmentDetialed3';
import DepartmentBanner from '../assets/images/modern-composition-with-realistic-heart-stethoscope.jpg'
const Doctors = [
  {
    name: "Dr. Mohammed Hussain",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  },
  {
    name: "Dr. Mohammed Hussain",
    image: "https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148814212.jpg",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  },
  {
    name: "Dr. Mohammed Hussain",
    image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  }, {
    name: "Dr. Mohammed Hussain",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  }, {
    name: "Dr. Mohammed Hussain",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  }, {
    name: "Dr. Mohammed Hussain",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  }, {
    name: "Dr. Mohammed Hussain",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  }, {
    name: "Dr. Mohammed Hussain",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  }, {
    name: "Dr. Mohammed Hussain",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  }, {
    name: "Dr. Mohammed Hussain",
    image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    Department: "Orthopaedics",
    Qualification: "MBBS, DNB (General Medicine)",
  },
  // Repeat for more doctors as necessary
];

function DepartmentDetailedPage() {
  const { no } = useParams(); // Extract parameters from the route
  console.log(no, 'Department Number');

  return (
    <>
    <div className='relative'>
    <div className="w-full">
        <img src={DepartmentBanner} alt="Medical team in an operating room" className="w-full h-[450px] object-cover" />

    </div>
            {/* <h1 className="absolute top-1/2 left-1/2 text-3xl sm:text-4xl text-white font-bold flex items-center">
            <i className="fas fa-heart mr-2 sm:mr-4"></i> Cardiology
        </h1> */}
    </div>
   
    <section className="   p-8 relative">
      
    <div className="absolute bg-thirdColor top-0 left-0 w-full h-full " 
  //  style={{
  //   backgroundImage: `linear-gradient(45deg, 
  //     #8871A9 0%, 
  //     #8871A9 40%, 
  //     transparent 40%, 
  //     transparent 45%, 
  //     #8871A9 45%, 
  //     #8871A9 60%, 
  //     transparent 60%, 
  //     transparent 65%, 
  //     #8871A9 65%, 
  //     #8871A9 80%, 
  //     transparent 80%, 
  //     transparent 85%, 
  //     #8871A9 85%, 
  //     #8871A9 100%)`, // No trailing comma here
  // }}

>

</div>


    <div className=" px-5  sm:px-16  relative z-10">
        <h1 className="text-3xl sm:text-4xl text-white font-bold flex items-center">
            <i className="fas fa-heart mr-2 sm:mr-4"></i> Cardiology
        </h1>
        {/* <p className="text-lg mt-5 text-white">9 Doctors</p>    */}
    </div>
    {/* <button className="absolute top-8 right-8 bg-orange-500 text-white py-2 px-4 rounded-full">Find a Doctor</button> */}
</section>

    <div className="bg-purple-50 min-h-screen   p-5  sm:p-16 ">
      
      {/* Overview Section */}
      <section className="w-full items-center  p-8">
        <h2 className="text-2xl text-headingColor font-bold mb-4">Overview</h2>
        <p className="mb-4 text-justify">
          The Department of Adult Cardiology at Kimsat in Kollam is a leading centre in Kerala and beyond. With a team of highly skilled cardiologists, resident cardiologists, and paramedical staff, the department provides top-quality heart care. We have achieved numerous milestones and are known for our innovative medical procedures and patient-centered approach.
        </p>
        <p className="mb-4 text-justify">
          Rapid lifestyle changes of developing economies have resulted in an unprecedented heart disease epidemic.
        </p>
        <p className="mb-4 text-justify">
          Along with preventive measures that involve healthcare planning, public education, and lifestyle changes, facilities to take care of the immediate consequences of heart disease have become the need of the day.
        </p>
      </section>

      {/* Doctors List */}
      <h1 className="text-4xl mt-10 text-headingColor text-center font-semibold mb-8">Doctors</h1>
      <div className='flex justify-center'>

     
      <div className="w-full md:w-3/4  mt-10 h-[500px] overflow-y-auto  custom-scrollbar p-8">
       
        <div className="container grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Doctors.map((doctor, index) => (
            <div key={index} className="card  flex justify-center sm:justify-normal">
              <img
                src={doctor.image}
                alt="Doctor's portrait"
                className="w-full h-56 object-cover rounded-md shadow-md"
              />
              <div className="content p-4 bg-white rounded-b-md">
                <h3 className="text-sm text-headingColor font-medium">{doctor.name}</h3>
                <p className="text-sm text-textColor font-semibold">{doctor.Department}</p>
                <p className="text-xs text-textColor font-semibold">{doctor.Qualification}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    <DepartmentDetialed3/>
    </>
  );
}

export default DepartmentDetailedPage;
