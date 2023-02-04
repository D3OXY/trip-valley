import React, { useState } from "react";
import AuthCheck from '../../../components/AuthCheck'
import NavbarComponent from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'

function CreatePage() {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <AuthCheck>
                <NavbarComponent />
                <div className='flex flex-col items-center justify-center font-Poppins font-semibold'>
                    <h1 className='text-lg md:text-3xl'>Create</h1>
                </div>
                <Footer />
            </AuthCheck>
        </>
    )
}

export default CreatePage
