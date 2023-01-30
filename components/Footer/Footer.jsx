import React from 'react'
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';

function Footer() {
    return (
        <div className='bg-[#0C1011] w-[100%] p-12 m-0 md:pl-28 md:pr-28 flex md:flex-col'>
            <div>
                hi
            </div>

            <div class="w-full border-t border-[#346769] m-6"></div>

            <div className='flex flex-col md:flex-row items-center w-full'>
                <h1 className='flex-1 text-left uppercase text-[#FFFFFF] font-Poppins font-semibold text-3xl '>Trip<span className='uppercase text-[#C5FBD8] '>VALLEY</span></h1>
                <p className='flex-1 text-center text-[#909EA2] hover:underline cursor-pointer '>© 2023 TripValley</p>
                <div className='flex-1 text-right flex flex-row justify-end'>
                    <BsInstagram className='text-[#EAEAF1CC] ml-2 mr-2 text-3xl hover:text-4xl cursor-pointer ease-in-out duration-200' />
                    <BsFacebook className='text-[#EAEAF1CC] ml-2 mr-2 text-3xl hover:text-4xl cursor-pointer ease-in-out duration-200' />
                    <BsWhatsapp className='text-[#EAEAF1CC] ml-2 mr-2 text-3xl hover:text-4xl cursor-pointer ease-in-out duration-200' />
                </div>
            </div>
        </div>
    )
}

export default Footer