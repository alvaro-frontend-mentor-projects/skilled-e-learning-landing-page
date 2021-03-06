import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row h-[100px] justify-between items-center mx-[20px] md:mx-[40px] lg:mx-[160px] '>
        <h1 className='font-Jakarta font-[700] sm:text-[28px] md:text-[28px] lg:text-[35px]'>
          skilled
        </h1>
        <button className='font-Jakarta sm:text-[16px] md:text-[16px] lg:text-[18px] text-white bg-fmDarkBlue hover:bg-fmLightBlue sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-full '>
          Get Started
        </button>
    </div>
  )
}

export default Navbar