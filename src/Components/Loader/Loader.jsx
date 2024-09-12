
import React from 'react';
import './Loader.css'; 

import BounceLoader from 'react-spinners/BounceLoader';
import kimSatLogo from '../../assets/Kimsat Logo/KIMSAT FINAL LOGO-2.png'





const Loader = () => {
  return (
    <div className="loader relative">
        <div className='w-[100px] h-[100px] ml-5  '>
        <BounceLoader
  color="#ebf0ec"
  size={90}
/>

        </div>
      <img src={kimSatLogo} alt="Loading..." className="loader-image w-[70px] h-[50px] absolute top-50 left-50" />
    </div>
  );
};

export default Loader;
