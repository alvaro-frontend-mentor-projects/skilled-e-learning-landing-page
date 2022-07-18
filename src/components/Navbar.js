import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row h-[100px] justify-between items-center mx-[160px]'>
        <h1 className='font-Jakarta font-[700] text-[35px]'>
          skilled
        </h1>
        <button className='font-Jakarta text-[18px] text-white bg-fmDarkBlue hover:bg-fmLightBlue px-8 py-3.5 rounded-full '>
          Get Started
          </button>
    </div>
  )
}

export default Navbar