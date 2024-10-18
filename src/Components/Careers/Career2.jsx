import React from 'react';

function CurrentOpenings({openings}) {
  console.log(openings,'opeinginsss')
  return (
    // <div className='flex flex-col p-6 bg-gray-100 rounded-lg shadow-md'>
    //   <h1 className='font-bold text-headingColor text-3xl mb-4 text-center'>
    //     Current Openings
    //   </h1>
    //   <ul className='space-y-3'>
    //     {['Staff Nurse', 'Charge Nurse', 'Physician Assistant', 'Deputy Manager/Manager - Branding', 'Executive/Junior Executive'].map((job, index) => (
    //       <li
    //         key={index}
    //         className='text-lg text-gray-800 hover:text-red-600 hover:font-semibold transition duration-300 ease-in-out cursor-pointer'
    //       >
    //         {job}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="p-10">
    <h1 className="text-3xl font-bold text-secondaryColor mb-6">Current Openings</h1>
    <ul className="space-y-4 text-gray-600">
      {openings.map((job,index)=>
      (
        <>
        <div className="flex flex-col gap-2 p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">
        <li key={index} className="text-lg text-textColor font-bold">{job.job}</li>
        <span className='text-sm text-textColor font-semibold'>{job.description}</span>
        </div>
       
        </>


      )
      
      )}
        {/* <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Staff Nurse</li>
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Charge Nurse</li>
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Physician Assistant</li>
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Deputy Manager/Manager - Branding</li>
        <li className="p-2 hover:bg-gray-100 max-w-[500px] rounded cursor-pointer">Executive/Junior Executive</li> */}
    </ul>
</div>
  );
}

export default CurrentOpenings;
