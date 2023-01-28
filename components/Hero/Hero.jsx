import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

function Hero() {
    return (
        <div className='hero w-[100%] h-[500px]'>
            <div className='w-[100%] md:w-[50%] h-[100%] flex flex-col pt-[30px] md:pt-0 md:justify-center items-center'>
                < p className='text-white mb-0 font-Poppins font-normal' > We're here to take you there.</p>
                < h1 className='text-white uppercase font-Poppins font-semibold' > Trip Valley</h1 >
                <p className='text-white mb-0 font-Poppins font-normal'>Resort and Travel Agency</p>
                <div className='flex flex-row justify-center items-center mb-4'>
                    <HiLocationMarker className='text-white' />
                    <p className='text-white mb-0 font-Poppins font-normal'>Trikaripur, near Payyannur, Kannur</p>
                </div>
                <a className=' bg-[#08898F] pr-14 pl-14 pt-4 pb-4 rounded-lg text-white font-Inter font-medium' href="/">Book Now</a>
            </div >
            <div className='w-[50%] h-[100%] hidden '></div>
        </div >
    )
}

export default Hero