import React, { useState, useEffect } from "react";
import AuthCheck from '../../../../components/AuthCheck'
import NavbarComponent from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import { useRouter } from "next/router";
import IncludesForm from "./IncludesForm";
import DataForm from "./DataForm";
import ImageForm from "./ImageForm";
import PricesForm from "./PricesForm";
const defaultData = {
    name: '',
    description: '',
    thumbnail: '',
    checkin: '',
    checkout: '',
    prices: [],
    includes: [],
    images: []
};

function CreatePage() {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState(defaultData);

    const handleSubmit = (e) => {
        setError(null);
        e.preventDefault();
        if (!formData.prices.length) return setError('Please add at least one price');
        console.log(formData);
        // setFormData(defaultData);
        // router.push('/resorts/' + formData.name);
        setError(null);
    };

    return (
        <>
            <AuthCheck>
                <NavbarComponent />
                <div className='flex flex-col items-center justify-center font-Poppins font-semibold'>
                    <h1 className='text-lg md:text-3xl'>Create - Resort</h1>
                    <form onSubmit={handleSubmit}>

                        <DataForm formData={formData} setFormData={setFormData} />
                        <PricesForm formData={formData} setFormData={setFormData} />
                        <IncludesForm formData={formData} setFormData={setFormData} />
                        <ImageForm formData={formData} setFormData={setFormData} />
                        <div className="flex flex-col items-center justify-center w-full m-4">
                            <button className='m-2 flex flex-row items-center justify-center p-4 bg-blue-600 rounded-lg hover:scale-105 font-bold text-md ease-in-out duration-200 text-white px-12 py-4'>Save</button>
                            {error && <p className="m-2 rounded-lg py-2 px-6 bg-red-500 text-white">{error}</p>}
                        </div>
                        <div>
                            <h1>Raw Data</h1>
                            <pre>{JSON.stringify(formData, null, 2)}</pre>
                        </div>
                    </form>
                </div>
                <Footer />
            </AuthCheck>
        </>
    )
}

export default CreatePage
