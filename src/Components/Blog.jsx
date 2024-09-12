import React from 'react'
import MainPoster from '../assets/images/Rectangle 35.png'
import subPosts from '../assets/images/Rectangle 36-1.png'

function Blog() {
  return (
    <div className=" mx-auto border-gray-300 mt-10 p-16">
    <div className="border-b-2  pb-4 mb-6 flex flex-col  justify-center items-center">
     <h1 className="heading  mr-2">
      Our Blog
     </h1>
     <h3 className= " text-secondaryColor text-lg font-medium mt-7">
      Recent Articles And News
     </h3>
    </div>
    <div className="flex flex-col lg:flex-row gap-6">
     <div className="flex-1">
      <img alt="Main article image" className="w-full mb-4 object-cover" src={MainPoster}/>
      <div className="flex items-center mb-2">
       <span className="bg-gray-200 px-2 py-1 text-sm">
        News . 13 Jul 2024
       </span>
      </div>
      <h2 className="text-lg mb-2">
       2024 ൽ KIMSAT ആശുപത്രിയുടെ ഓണാം വാർഷികം ജൂൺ 10 ന്
      </h2>
      <a className="text-secondaryColor" href="#">
       Read More
      </a>
     </div>
     <div className="flex-1">
      <div className="border-b-2 border-gray-300 text-headingColor font-medium pb-4 mb-4 flex justify-between items-center">
       <h2 className="text-xl">
        Recent News
       </h2>
      <button className='btn group'>
        VIEW ALL
        <i className="fas fa-arrow-right transition-transform duration-1000 group-hover:translate-x-2 ml-1">
        </i>
        </button>
      </div>
      <div className="space-y-4">
       <div className="flex gap-4">
        <img alt="Recent news image" className="w-24 h-24 object-cover" src={subPosts}/>
        <div>
         <p className='para'>
          കാഞ്ഞിരപ്പള്ളി KIMSAT ആശുപത്രിയുടെ ഓണാം വാർഷികം ജൂൺ 10 ന്
         </p>
         <small className="text-textColor">
          News . 13 Jul 2024
         </small>
        </div>
       </div>
       <div className="flex gap-4">
        <img alt="Recent news image" className="w-24 h-24 object-cover" src={subPosts}/>
        <div>
         <p className='para'>
          കാഞ്ഞിരപ്പള്ളി KIMSAT ആശുപത്രിയുടെ ഓണാം വാർഷികം ജൂൺ 10 ന്
         </p>
         <small className="text-textColor">
          News . 13 Jul 2024
         </small>
        </div>
       </div>
       <div className="flex gap-4">
        <img alt="Recent news image" className="w-24 h-24 object-cover" src={subPosts}/>
        <div>
         <p className='para'>
          കാഞ്ഞിരപ്പള്ളി KIMSAT ആശുപത്രിയുടെ ഓണാം വാർഷികം ജൂൺ 10 ന്
         </p>
         <small className="text-textColor">
          News . 13 Jul 2024
         </small>
        </div>
       </div>
       <div className="flex gap-4">
        <img alt="Recent news image" className="w-24 h-24 object-cover" src={subPosts}/>
        <div>
         <p  className='para'>
          കാഞ്ഞിരപ്പള്ളി KIMSAT ആശുപത്രിയുടെ ഓണാം വാർഷികം ജൂൺ 10 ന്
         </p>
         <small className="text-textColor">
          News . 13 Jul 2024
         </small>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  )
}

export default Blog