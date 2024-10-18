import React from 'react'
import image from '../assets/images/Kimsat_404-error.gif'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    // <div className=' relative p-10 flex justify-center'>
    //   <img src={image} alt="404 error" className=' h-[400px]' />
  
    // </div>
    <section className=' '>
    
        <div className='flex  flex-col gap-10 justify-center items-center h-screen'>
          <span className='text-4xl sm:text-6xl text-headingColor font-semibold'>OOPS .....!</span>
            <span className='text-4xl sm:text-6xl leading-19 font-[900] items-center text-textColor'>404 Page Not Found</span>
            <Link to={'/'}>
            <div className='px-5 py-3 bg-thirdColor hover:bg-secondaryColor text-white'>Back Home</div>
            </Link>
        </div>

</section>

  )
}

export default NotFound