import React from 'react';
import homeHero from '../assets/home-hero.png'; 

const FirstImg = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
      <div className='flex items-center'>
        <div className='relative  '>
          <img src={homeHero} alt="Home Hero" height={14} width={620} className='object-contain'/>
        </div>
      </div>
    </div>
  );
};

export default FirstImg;
