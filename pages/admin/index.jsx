import React from 'react'
import { Container } from 'react-bootstrap'
import AuthCheck from '../../components/AuthCheck'
import Footer from '../../components/Footer/Footer'
import NavbarComponent from '../../components/Navbar/Navbar'
import { useAuth } from '../../lib/AuthContext'
import { ImBin } from 'react-icons/im'
import { AiOutlinePlus } from 'react-icons/ai'
import data from "../../components/data.json"
import { useRouter } from 'next/router'

function AdminDashboard() {
    const { logout } = useAuth()
    return (
        <>
            <AuthCheck>
                <>
                    <NavbarComponent />
                    <Container className='px-2 md:px-24 font-Poppins'>
                        <div className='py-2 font-bold flex flex-row justify-between items-center border-b-2 border-black mb-8'>
                            <h1 className='text-lg md:text-3xl'>AdminDashboard</h1>
                            <button className='p-4 bg-red-600 rounded-lg hover:bg-red-900' onClick={() => { logout(); }} >LogOut</button>
                        </div>
                        <div className='my-2 text-2xl w-full'>
                            <div className='flex flex-row items-center justify-between'>
                                <h1 className='text-underline font-bold'>Resorts</h1>
                                <button className='flex flex-row items-center justify-center p-4 bg-blue-600 rounded-lg hover:scale-105 font-bold text-sm ease-in-out duration-200'> <AiOutlinePlus />Add </button>
                            </div>
                            <div className='my-4 p-2 w-full'>
                                {data.resorts.map((item) => {
                                    return (
                                        <Card name={item.name} section="resorts" />
                                    )

                                })}
                            </div>
                        </div>
                        <div className='my-2 text-2xl'>
                            <div className='flex flex-row items-center justify-between'>
                                <h1 className='text-underline font-bold'>Packages</h1>
                                <button className='flex flex-row items-center justify-center p-4 bg-blue-600 rounded-lg hover:scale-105 font-bold text-sm ease-in-out duration-200'> <AiOutlinePlus />Add </button>
                            </div>
                            <div className='my-4 p-2 w-full'>
                                {data.packages.map((item) => {
                                    return (
                                        <Card name={item.name} section="packages" />
                                    )

                                })}
                            </div>
                        </div>
                    </Container>
                    <Footer />
                </>
            </AuthCheck>
        </>
    )
}

export default AdminDashboard




function Card({ name, section }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/${section.toLowerCase()}/${name.toLowerCase()}`)} className='m-2 p-3 border-2 border-black rounded-lg flex flex-row justify-between items-center w-full hover:scale-[0.98] ease-in-out duration-200 cursor-pointer'>
            <h1>{name}</h1>
            <ImBin className='w-14 h-14 p-2 rounded-lg bg-red-500 text-white hover:scale-95 ease-in-out duration-200 cursor-pointer' />
        </div>
    )
}