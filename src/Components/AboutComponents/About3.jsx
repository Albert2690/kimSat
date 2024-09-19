import React from 'react'
import chairmanImage from '../../assets/images/chairman-02.jpg'

function About3() {
  return (
    <div className="bg-white ">
    <div className="flex flex-col md:flex-row p-5 gap-4 sm:p-16 justify-around mb-10">
        <div className="text-start mb-6 md:mb-0">
            {/* <div className="text-6xl font-bold text-gray-300">01</div> */}
            <div className=" text-lg sm:text-xl  font-bold text-redColor mt-4">Our Vision</div>
            <p className="text-textColor  mt-2 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        <div className="text-start mb-6 md:mb-0">
            {/* <div className="text-6xl font-bold text-gray-300">02</div> */}
            <div className="text-xl font-bold text-redColor mt-4">Our Mission</div>
            <p className="text-textColor mt-2 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        <div className="text-start">
            {/* <div className="text-6xl font-bold text-gray-300">03</div> */}
            <div className="text-xl font-bold text-redColor mt-4">Our Philosophy</div>
            <p className="text-textColor mt-2 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
    </div>
 <div className="bg-purple-50 w-screen flex flex-col md:flex-row p-6 md:p-10 items-center text-center">
    <div>
        <p className="text-redColor text-xl md:text-2xl italic mb-4">
            "At KIMSAT Hospital, humanity thrives. Compassion, affordability, and community engagement define our commitment to healthcare excellence."
        </p>
        <p className="text-textColor font-bold">S. VIKRAMAN</p>
        <p className="text-gray-500">(Chairman)</p>
    </div>
    
    {/* <img src={chairmanImage} alt="An elderly man with glasses and a white shirt, smiling in a busy outdoor setting" className="rounded-lg w-1/2 h-[400px] shadow-lg mt-4 md:mt-0"/> */}
</div>
</div>
  )
}

export default About3