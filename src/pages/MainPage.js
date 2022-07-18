import React from 'react'
import HeroImage from '../assets/image-hero-desktop.png'

import svgDesign from '../assets/icon-design.svg'
import svgPhotography from '../assets/icon-photography.svg'
import svgCrypto from '../assets/icon-crypto.svg'
import svgBusiness from '../assets/icon-business.svg'

const MainPage = () => {
  return (

    <>

        {/* HERO SECTION */}
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
                <img src={HeroImage} alt="" className='absolute top-[-250px] left-[570px]'/> 
            </div>
        </div>


        {/* FEATURES SECTION */}
        <div className='bg-gradient-to-b from-[#FFFFFF] to-[#F0F1FF]'>
            <div className='mx-[160px] pb-[140px]  pt-[130px] grid grid-cols-3 gap-x-8 gap-y-20'>
                {/* Box 1 */}
                <div className='relative h-[322px] rounded-2xl bg-gradient-to-t from-[#F02AA6] to-[#FF6F48] pl-8 pr-16 pt-16'>
                    <h1 className='text-white text-[34px] font-[600] leading-[40px]'>
                        Check out our most popular courses!
                    </h1>
                </div>

                {/* Box 2 */}
                <div className='relative h-[322px] rounded-2xl bg-white px-8 pt-16 pb-10'>
                    {/* Icon */}
                    <svg className='absolute left-8 top-[-30px]' width="56" height="56" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FF6F48" offset="0%"/><stop stop-color="#F02AA6" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path d="M33.97 20.678c.565-.498.893-1.21.906-1.962A2.706 2.706 0 0 0 32.16 16a2.794 2.794 0 0 0-1.66.603 2.825 2.825 0 0 0-.854 1.962 2.69 2.69 0 0 0 4.325 2.113Zm-8.752.453c0 .05-.05.05-.1.1v.05a6.308 6.308 0 0 0-2.919 1.41c-.503.473-.958.995-1.358 1.559-1.006 1.408 1.358 2.766 2.315 1.358 1.257-1.762 2.816-2.264 4.527-1.71a141.96 141.96 0 0 0-2.717 5.181c-1.107 2.163-3.47 3.874-5.786 2.566a1.402 1.402 0 1 0-1.508 2.364 6.826 6.826 0 0 0 8.704-1.66c.05 0 .153.05.2.05 1.5.624 2.907 1.454 4.177 2.466.603.502 1.66 3.065 2.263 4.376a1.392 1.392 0 0 0 2.113.452c.393-.382.476-.982.202-1.456-.705-1.456-1.862-4.427-2.818-5.135a31.566 31.566 0 0 0-2.364-1.762l.1-.1a16.972 16.972 0 0 0-1.006-.605c.856-1.609 1.711-3.168 2.616-4.728 2.11.667 4.415.19 6.087-1.258.517-.46.973-.984 1.358-1.56.956-1.257-.905-2.515-2.012-1.66a.709.709 0 0 0-.153.202 4.36 4.36 0 0 1-2.013 1.66c-.05.05-.1.05-.1.1h-.051a4.146 4.146 0 0 1-3.622-.452l.101-.101h.05a.383.383 0 0 0-.201-.1 9.292 9.292 0 0 0-.956-.554 7.258 7.258 0 0 0-5.134-1.056l.005.003Z" fill="#FFF" fill-rule="nonzero"/></g></svg>
                    {/* Text Flexbox Column */}
                    <div className='flex flex-col h-[100%] justify-between gap-4'>
                        <h2 className='text-fmDarkBlue text-[24px] font-[700]'>
                            Animation
                        </h2>
                        <p className='text-fmGray text-[19px]'>
                            Learn the latest animation techniques to create stunning motion design and captivate your audience. 
                        </p>
                        <p className='text-fmPink text-[18px] mt-auto font-[600]'>
                            Get Started
                        </p>
                    </div>
                </div>

                {/* Box 3 */}
                <div className='relative h-[322px] rounded-2xl bg-white px-8 pt-16 pb-10'>
                    {/* Icon */}
                    <div>
                        <img className='absolute left-8 top-[-30px]' src={svgDesign} alt="" />
                    </div>
                    {/* Text Flexbox Column */}
                    <div className='flex flex-col h-[100%] justify-between gap-4'>
                        <h2 className='text-fmDarkBlue text-[24px] font-[700]'>
                            Design
                        </h2>
                        <p className='text-fmGray text-[19px]'>
                            Create beautiful, usable interfaces to help shape the future of how the web looks.
                        </p>
                        <p className='text-fmPink text-[18px] mt-auto font-[600]'>
                            Get Started
                        </p>
                    </div>
                </div>

                {/* Box 4 */}
                <div className='relative h-[322px] rounded-2xl bg-white px-8 pt-16 pb-10'>
                    {/* Icon */}
                    <div>
                        <img className='absolute left-8 top-[-30px]' src={svgPhotography} alt="" />
                    </div>
                    {/* Text Flexbox Column */}
                    <div className='flex flex-col h-[100%] justify-between gap-4'>
                        <h2 className='text-fmDarkBlue text-[24px] font-[700]'>
                            Photography
                        </h2>
                        <p className='text-fmGray text-[19px]'>
                            Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.
                        </p>
                        <p className='text-fmPink text-[18px] mt-auto font-[600]'>
                            Get Started
                        </p>
                    </div>
                </div>

                {/* Box 5 */}
                <div className='relative h-[322px] rounded-2xl bg-white px-8 pt-16 pb-10'>
                    {/* Icon */}
                    <div>
                        <img className='absolute left-8 top-[-30px]' src={svgCrypto} alt="" />
                    </div>
                    {/* Text Flexbox Column */}
                    <div className='flex flex-col h-[100%] justify-between gap-4'>
                        <h2 className='text-fmDarkBlue text-[24px] font-[700]'>
                            Crypto
                        </h2>
                        <p className='text-fmGray text-[19px]'>
                            All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.
                        </p>
                        <p className='text-fmPink text-[18px] mt-auto font-[600]'>
                            Get Started
                        </p>
                    </div>
                </div>

                {/* Box 6 */}
                <div className='relative h-[322px] rounded-2xl bg-white px-8 pt-16 pb-10'>
                    {/* Icon */}
                    <div>
                        <img className='absolute left-8 top-[-30px]' src={svgBusiness} alt="" />
                    </div>
                    {/* Text Flexbox Column */}
                    <div className='flex flex-col h-[100%] justify-between gap-4'>
                        <h2 className='text-fmDarkBlue text-[24px] font-[700]'>
                            Business
                        </h2>
                        <p className='text-fmGray text-[19px]'>
                            A step-by-step playbook to help you start, scale, and sustain your business without outside investment.
                        </p>
                        <p className='text-fmPink text-[18px] mt-auto font-[600]'>
                            Get Started
                        </p>
                    </div>
                </div>
            </div>

            
        </div>

        {/* FOOTER SECTION */}
        <div className='flex flex-row h-[100px] justify-between items-center bg-fmDarkBlue px-[160px]'>
            <h1 className='font-Jakarta font-[700] text-[35px] text-white'>
            skilled
            </h1>
            <button className='font-Jakarta text-[18px] text-white bg-gradient-to-t from-[#F02AA6] to-[#FF6F48] hover:bg-fmLightBlue px-8 py-3.5 rounded-full '>
            Get Started
            </button>
        </div>

    </>
    
    

    

  )
}

export default MainPage