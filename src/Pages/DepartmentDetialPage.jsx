import React from 'react'

const Doctors = [
    {
      name: "Dr. Mohammed Hussain",
      image:
        "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
      Department: "Orthopaedics",
      Qualification: "MBBS, DNB (General Medicine)",
    },
    {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        Department: "Orthopaedics",
        Qualification: "MBBS, DNB (General Medicine)",
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        Department: "Orthopaedics",
        Qualification: "MBBS, DNB (General Medicine)",
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        Department: "Orthopaedics",
        Qualification: "MBBS, DNB (General Medicine)",
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        Department: "Orthopaedics",
        Qualification: "MBBS, DNB (General Medicine)",
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        Department: "Orthopaedics",
        Qualification: "MBBS, DNB (General Medicine)",
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        Department: "Orthopaedics",
        Qualification: "MBBS, DNB (General Medicine)",
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        Department: "Orthopaedics",
        Qualification: "MBBS, DNB (General Medicine)",
      },
      {
        name: "Dr. Mohammed Hussain",
        image:
          "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
        Department: "Orthopaedics",
        Qualification: "MBBS, DNB (General Medicine)",
      },
    // Add more doctor objects as needed
  ];

function DepartmentDetialPage() {
  return (
    <div className='bg-purple-50  '>
                    <section className="   p-8 relative">
                        <div className="absolute bg-thirdColor top-0 left-0 w-full h-full  " 
//                         style={{
//     backgroundImage: `linear-gradient(45deg, 
//       #8871A9 0%, 
//       #8871A9 40%, 
//       transparent 40%, 
//       transparent 45%, 
//       #8871A9 45%, 
//       #8871A9 60%, 
//       transparent 60%, 
//       transparent 65%, 
//       #8871A9 65%, 
//       #8871A9 80%, 
//       transparent 80%, 
//       transparent 85%, 
//       #8871A9 85%, 
//       #8871A9 100%, 
//       )`,
//   }}
  
  >
    
  </div>
                        <div className=" px-5  sm:px-16  relative z-10">
                            <h1 className="text-3xl text-white font-bold flex items-center">
                                <i className="fas fa-heart mr-2"></i> Adult cardiology
                            </h1>
                            {/* <p className="text-lg mt-5 text-white">9 Doctors</p>    */}
                        </div>
                        {/* <button className="absolute top-8 right-8 bg-orange-500 text-white py-2 px-4 rounded-full">Find a Doctor</button> */}
                    </section>

                    <div className='flex p-5  sm:p-16  mt-10 py-12 flex-col md:flex-row'>

                   
                    <section className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl text-headingColor font-bold mb-4">Overview</h2>
                        <p className="mb-4  text-justify">
                            The Department of Adult Cardiology at Kimsat in Kollam is a leading centre in Kerala and beyond. With a team of highly skilled cardiologists, resident cardiologists, and paramedical staff, the department provides top-quality heart care. We have achieved numerous milestones and are known for our innovative medical procedures and patient-centered approach. The department offers a wide range of specialized services and expertise in areas such as Hypertrophic Cardiomyopathy (HCM), cardio-oncology, Heart failure, and amyloidosis. Having evolved as a leader in the fight against cardiovascular disorders in Kerala, it serves about 50,000 cardiovascular patients annually.
                        </p>
                        <p className="mb-4 text-justify">
                            Rapid lifestyle changes of developing economies have resulted in an unprecedented heart disease epidemic.
                        </p>
                        <p className="mb-4 text-justify">
                            Along with preventive measures that involve healthcare planning, public education, and lifestyle changes, facilities to take care of the immediate consequences of heart disease have become the need of the day.
                        </p>
                    </section>
                    <div className="w-full md:w-1/2 h-screen overflow-y-auto custom-scrollbar">
        <h1 className="text-2xl text-headingColor justify-center flex  font-semibold mb-9 ">
         Doctors 
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Doctors.map((doctor, index) => (
            <div onClick={()=>navigate('/doctor-detials')} key={index} className="bg-white cursor-pointer p-6 rounded-lg shadow-md text-center">
              <img
                src={doctor.image}
                alt="Doctor's portrait"
                className="mx-auto mb-4 object-fit"
              />
              <h2 className="text-lg font-medium">{doctor.name}</h2>
              <p className="text-sm text-gray-600">{doctor.Department}</p>
              <p className="text-sm text-gray-600">{doctor.Qualification}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
                </div>
  )
}

export default DepartmentDetialPage