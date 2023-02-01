import React from 'react'
import { BsInstagram, BsFacebook, BsWhatsapp, BsTelephone } from 'react-icons/bs';

function Footer() {
    return (
        <div className='bg-[#0C1011] w-[100%] md:p-12 m-0 md:pl-28 md:pr-28 flex flex-col'>
            <div className='font-Poppins font-semibold flex flex-col md:flex-row items-center justify-center  '>
                <a className='m-6 text-[#C5FBD8] ' href="#home">Home</a>
                <a className='m-6 text-[#C5FBD8] ' href="#">Packages</a>
                <a className='m-6 text-[#C5FBD8] ' href="#">Resorts</a>
                <a className='m-6 text-[#C5FBD8] ' href="#about">About Us</a>
                <a className='m-6 text-[#C5FBD8] ' href="#about">Contact Us</a>
            </div>

            <div className="w-full border-t border-[#346769] "></div>

            <div className='flex flex-col md:flex-row items-center w-full mt-6'>
                <h1 className='flex-1 text-left uppercase text-[#FFFFFF] font-Poppins font-semibold text-3xl '>Trip<span className='uppercase text-[#C5FBD8] '>VALLEY</span></h1>
                <p className='flex-1 text-center text-[#909EA2] hover:text-[#08898F] hover:underline cursor-pointer ' onClick={() => { window.location.href = 'https://deoxy.dev' }} >© 2023 TRIPVALLEY</p>
                <div className='flex-1 text-right flex flex-row justify-end mb-6'>
                    <BsInstagram className='text-[#EAEAF1CC] hover:text-[#08898F] ml-2 mr-2 text-3xl hover:text-4xl cursor-pointer ease-in-out duration-200' />
                    <BsFacebook className='text-[#EAEAF1CC] hover:text-[#08898F] ml-2 mr-2 text-3xl hover:text-4xl cursor-pointer ease-in-out duration-200' />
                    <BsWhatsapp className='text-[#EAEAF1CC] hover:text-[#08898F] ml-2 mr-2 text-3xl hover:text-4xl cursor-pointer ease-in-out duration-200' />
                    <BsTelephone className='text-[#EAEAF1CC] hover:text-[#08898F] ml-2 mr-2 text-3xl hover:text-4xl cursor-pointer ease-in-out duration-200' />
                </div>
            </div>
        </div>
    )
}

export default Footer