import React, { useState, useEffect } from "react";
import AuthCheck from '../../../../components/AuthCheck'
import NavbarComponent from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import { useRouter } from "next/router";
import IncludesForm from "./IncludesForm";
import DataForm from "./DataForm";
import ImageForm from "./ImageForm";
import PricesForm from "./PricesForm";

function CreatePage() {
    const router = useRouter();
    const [includes, setIncludes] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        thumbnail: '',
        checkin: '',
        checkout: '',
        prices: [],
        includes: [],
        images: []
    });



    const handlePriceChange = (index, event) => {
        const { name, value } = event.target;
        const prices = [...formData.prices];
        prices[index][name] = value;
        setFormData({ ...formData, prices });
    };

    const handleImageChange = (index, event) => {
        const { value } = event.target;
        const images = [...formData.images];
        images[index] = value;
        setFormData({ ...formData, images });
    };

    const addPrice = () => {
        setFormData({
            ...formData,
            prices: [...formData.prices, { name: '', amount: '' }]
        });
    };

    const addImage = () => {
        setFormData({
            ...formData,
            images: [...formData.images, '']
        });
    };

    const removePrice = (index) => {
        const prices = [...formData.prices];
        prices.splice(index, 1);
        setFormData({ ...formData, prices });
    };

    const removeImage = (index) => {
        const images = [...formData.images];
        images.splice(index, 1);
        setFormData({ ...formData, images });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // setFormData({
        //     name: '',
        //     prices: [],
        //     images: []
        // });
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
                        <div className="flex items-center justify-center w-full m-4">
                            <button className='flex flex-row items-center justify-center p-4 bg-blue-600 rounded-lg hover:scale-105 font-bold text-md ease-in-out duration-200 text-white px-12 py-4'>Save</button>
                        </div>

                    </form>
                </div>
                <Footer />
            </AuthCheck>
        </>
    )
}

export default CreatePage
