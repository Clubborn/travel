import React from 'react'
import camp from '../assets/camp.svg'
import star from '../assets/star.svg'
import play from '../assets/play.svg'

const Hero = () => {
  return (
    <section className={`relative py-20 w-full px-20 max-xl:px-16 max-lg:p0 max-lg:py-6 overflow-hidden`}>
    <div className='absolute h-screen w-screen bg-[url("src/assets/hero-bg.svg")] 
    bg-cover bg-center xl:-right-0 xl:-top-12 lg:top-40 lg:right-2
    md:top-40 md:right-0'></div>

        <div className='flex relative gap-20 max-xl:flex-col z-10'>            
            <div className='flex-1'>
                <img className='max-sm:-top-9 max-sm:-left-3 absolute max-lg:-top-[1.5rem] 
                max-lg:left-0 max-xl:left-0 -top-[1.5rem] max-md:-top-9 max-md:-left-2 left-0 z-20' src={camp} alt="camp" />
                <h1 className='text-8xl font-bold mb-10 leading-[7rem] relative z-10 max-md:text-6xl max-sm:text-5xl'>Putuk Truno Camp Area</h1>
                <p className='text-gray-500 text-xl xl:max-w-[35rem]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible 
                    beauty of nature. We can help you on an adventure around the world in just one app</p>
                <div className='flex mt-10 items-center max-md:flex-col max-md:items-start'>
                    <div className='flex gap-2 mr-10 h-10 max-md:mb-2'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p className='text-[25px] text-blue-950 font-bold mr-1'>198k</p>
                    <p className='text-2xl'>Excellent Reviews</p>
                </div>
                <div className='flex mx-auto mt-20 items-center max-sm:flex-col max-sm:items-start max-sm:gap-10'>
                    <button className='bg-green-600 text-white text-2xl font-semibold px-9 py-7 rounded-full mr-20'>Dowload App</button>
                    <div className='flex items-center'>
                        <img src={play} width={30} alt="" />
                        <p className='text-blue-950 text-xl font-semibold ml-5'>How We Work ?</p>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div className='relative bg-grey w-[268px] z-10 rounded-3xl px-8 py-8'>
                    <h4 className='text-gray-400'>Location</h4>
                    <h3 className='text-white font-bold text-2xl mb-8'>Aguas Calientes</h3>
                    <div className='flex gap-8 text-gray-400'>
                        <div className=''>
                            <p>Distance</p>
                            <p className='text-white font-bold text-lg'>173.28 mi</p>
                        </div>
                        <div>
                            <p>Elevation</p>
                            <p className='text-white font-bold text-lg'>2.040 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero