import React from 'react'

function Hero() {
    return (
        <div className='hero w-[100%] h-[500px]'>
            <div className='w-[100%] md:w-[50%] h-[100%] flex flex-col pt-[30px] md:pt-0 md:justify-center items-center'>
                < p className='text-white' > We're here to take you there.</p>
                < h1 className='text-white' > Trip Valley</h1 >
                <p className='text-white'>Resort and Travel Agency</p>
                <p className='text-white'>Trikaripur, near Payyannur, Kannur</p>
                <a className=' bg-[#08898F] pr-8 pl-8 pt-6 pb-6 rounded-lg text-white' href="/">Book Now</a>
            </div >
            <div className='w-[50%] h-[100%] hidden '></div>
        </div >
    )
}

export default Hero