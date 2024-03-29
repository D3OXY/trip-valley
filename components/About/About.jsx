import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
    return (
        <section id='about'>
            <div className='mt-20 mb-20 flex flex-col md:flex-row'>
                <div className='w-[100%] md:w-[50%]' >
                    <h2 className='font-Poppins font-bold text-underline'>About Us</h2>
                    <p className='mt-4 mb-0 font-Poppins font-normal '>Trip Valley is a service Travel Agency Based in Kerala since 2020. Dedicated in Providing Totally reliable and practical Travel Solution as it offers most Competitive Rates in the Market. We provide Resort booking & Tour Package. Wayanad Munnar Vagamon Ooty Kulukkumala Trucking Package available for Manali, Kashmir, Goa, Maldives, Andaman Nicobar, Lakshadweep. Our mission is to provide the Greatest Product and services to the utmost satisfaction for all Agents as they are and will always be our number one Priority.</p>
                    <p className='font-Inter font-semibold pb-12'>Travel Agency Located Trikaripur, near Payyannur, Kannur.</p>
                    <div className='flex justify-center md:justify-start'>
                        <Link className='button bg-[#08898F] pr-14 pl-14 pt-4 pb-4 rounded-lg font-Inter font-medium' href="https://wa.me/918129387797">Book Now</Link>
                    </div>
                </div>

                <div className='hidden md:w-[50%] md:flex items-center justify-center mt-12 md:mt-0 p-10' >
                    <div className='w-full h-[370px] bg-[#08898F] flex justify-center items-center rounded-3xl '>
                        <img src="/about-logo.png" alt="About Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About