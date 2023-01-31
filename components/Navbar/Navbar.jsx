import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import ContactPopup from '../ContactPopup';

function NavbarComponent() {
    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='w-full h-20 bg-white pl-2 md:pl-24 pr-2 md:pr-24 flex flex-row items-center'>
                <div className=' w-[90%] md:w-[50%] flex flex-row items-center'>
                    <img src="/nav-logo.svg" alt="Trip Valley Logo" />
                    <p className='mb-0 text-2xl font-Poppins font-extrabold text-[#1A3724] uppercase'>Trip <span className='text-[#08898F]' >Valley</span></p>
                </div>
                <div className='w-[50%] flex md:hidden  justify-end items-center'>
                    {toggle ? <AiOutlineClose className='text-black text-4xl block md:hidden' onClick={() => { setToggle(!toggle) }} /> : <BiMenuAltRight className='text-black text-4xl block md:hidden' onClick={() => { setToggle(!toggle) }} />}
                </div>
                <div className=' w-[10%] md:w-[50%] hidden md:flex  justify-end items-center'>
                    <a className='navItem font-Poppins font-normal text-[#000000] m-[5px] ' href="#home">Home</a>
                    <a className='navItem font-Poppins font-normal text-[#000000] m-[5px] ' href="#">Packages</a>
                    <a className='navItem font-Poppins font-normal text-[#000000] m-[5px] ' href="#">Resorts</a>
                    <a className='navItem font-Poppins font-normal text-[#000000] m-[5px] ' href="#about">About Us</a>
                    <a className='button font-Poppins font-normal text-[#FFFFFF] m-[5px] bg-[#08898F] p-2 rounded ease-in-out duration-200' href="#" onClick={() => setShow(!show)} >Contact Us</a>
                    {show && <ContactPopup show={show} setShow={setShow} />}
                </div>
                <div></div>
            </div>
            {toggle && <DropDown />}
        </>
    )
}


export default NavbarComponent


function DropDown() {
    return (
        <div className='w-full bg-white ease-in-out duration-200 flex flex-col items-center justify-center'>
            <a className='navItem font-Poppins font-normal text-[#000000] m-[5px] ' href="#home">Home</a>
            <a className='navItem font-Poppins font-normal text-[#000000] m-[5px] ' href="#">Packages</a>
            <a className='navItem font-Poppins font-normal text-[#000000] m-[5px] ' href="#">Resorts</a>
            <a className='navItem font-Poppins font-normal text-[#000000] m-[5px] ' href="#about">About Us</a>
            <a className='button font-Poppins font-normal text-[#FFFFFF] m-[5px] bg-[#08898F] p-2 rounded ease-in-out duration-200' href="#">Contact Us</a>
        </div>
    )
}