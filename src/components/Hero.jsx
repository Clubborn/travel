import React from 'react'
import camp from '../assets/camp.svg'
import bg from '../assets/hero-bg.svg'
import star from '../assets/star.svg'
import play from '../assets/play.svg'

const Hero = () => {
  return (
    <section className={`relative py-20 w-full px-20 max-xl:px-16 max-xl:pr-0 max-lg:px-10 max-lg:py-6 overflow-hidden`}>
        <div className='absolute h-[100vh] w-[100vw] top-[-9rem] left-[10%] 
        bg-[url("src/assets/hero-bg.svg")] bg-left bg-50
        max-2xl:left-0 
        max-xl:hidden
        z-[1]'></div>
        <div className='flex gap-20 max-xl:flex-col'>            
            <div className='flex-1'>
                <img className='absolute max-lg:top-[2.5px] 
                max-lg:left-10 max-xl:left-16 top-[59px] left-20 z-20' src={camp} alt="camp" />
                <h1 className='text-8xl font-bold mb-10 leading-[7rem] relative z-10'>Putuk Truno Camp Area</h1>
                <p className='text-gray-500 text-xl max-w-[35rem]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible 
                    beauty of nature. We can help you on an adventure around the world in just one app</p>
                <div className='flex mt-10 items-center'>
                    <div className='flex gap-2 mr-10 h-10'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p className='text-[25px] text-blue-950 font-bold mr-1'>198k</p>
                    <p className='text-2xl'>Excellent Reviews</p>
                </div>
                <div className='flex mx-auto mt-20 items-center'>
                    <button className='bg-green-600 text-white text-2xl font-semibold px-9 py-7 rounded-full mr-20'>Dowload App</button>
                    <div className='flex items-center'>
                        <img src={play} width={30} alt="" />
                        <p className='text-blue-950 text-xl font-semibold ml-5'>How We Work ?</p>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div className='relative bg-grey w-[268px] h-[200px] z-10 rounded-3xl'>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero