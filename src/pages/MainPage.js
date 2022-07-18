import React from 'react'
import HeroImage from '../assets/image-hero-desktop.png'

const MainPage = () => {
  return (
    // HERO
    <div className='flex flex-row mx-[160px] h-[640px] relative'>
        {/* Left Column */}
        <div className='flex flex-col gap-10 w-[50%] justify-center pr-[100px]'>
            <h1 className='font-Jakarta font-[800] text-[56px] leading-[70.5px]'>
                Maximize skill,
                minimize budget
            </h1>
            <p className='font-Jakarta text-[18px] text-fmGray'>
                Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
            </p>
            <div>
                <button className=' font-Jakarta text-[18px] text-white bg-fmDarkBlue hover:bg-fmLightBlue px-8 py-4 rounded-full '>
                    Get Started
                </button>
            </div>
            
        </div>
        {/* Right Column */}
        <div className='w-[50%]'>
                <img
                src={HeroImage} 
                alt=""
                className='absolute top-[-250px] left-[570px]'
            />
            
            
        </div>
    </div>

    // FEATURES
  )
}

export default MainPage