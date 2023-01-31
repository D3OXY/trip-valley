import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../../components/Footer/Footer'
import NavbarComponent from '../../../components/Navbar/Navbar'
import WhatsAppIcon from '../../../components/WhatsAppIcon'

function index() {
    return (
        <>
            <NavbarComponent />
            <div className='hero w-[100%] max-h-[300px]'>
                <div className='w-[100%] md:w-[50%] h-[100%] flex flex-col pt-[30px] md:pt-0 md:justify-center items-center'>
                    < p className='text-white mt-48 md:mt-0 mb-0 font-Poppins font-normal' > We're here to take you there.</p>
                    <h1></h1>
                    <a className='bg-[#08898F] pr-6 md:pr-14 pl-6 md:pl-14 pt-3 md:pt-4 pb-3 md:pb-4 rounded-lg text-white font-Inter font-normal md:font-medium' href="/">Book Now</a>
                </div >
                <div className='w-[50%] h-[100%] hidden '></div>
            </div >
            <Container>
            </Container>
            <Footer />
            <WhatsAppIcon />
        </>
    )
}

export default index