import { addDoc, collection, getDocs, query, Timestamp, where } from 'firebase/firestore';
import { useRouter } from "next/router";
import React, { useState } from "react";
import AuthCheck from '../../../../components/AuthCheck';
import Footer from '../../../../components/Footer/Footer';
import NavbarComponent from '../../../../components/Navbar/Navbar';
import UploadFile from "../../../../components/UploadFile";
import { db, postToJSON } from "../../../../lib/firebase";
import DataForm from "./DataForm";
import ImageForm from "./ImageForm";
import IncludesForm from "./IncludesForm";
import PricesForm from "./PricesForm";
const defaultData = {
    name: '',
    location: '',
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

    const handleSubmit = async (e) => {
        setError(null);
        e.preventDefault();
        if (!formData.prices.length) return setError('Please add at least one price');
        if (!formData.images) return setError('Please add at least one image');
        if (!formData.thumbnail.includes('https://')) return setError('Please add a valid thumbnail url');

        const q = query(collection(db, "resorts"), where("name", "==", formData.name));
        const resorts = await (await getDocs(q)).docs.map(postToJSON);
        if (resorts.length) return setError('Resort with the name already exists');

        try {
            await addDoc(collection(db, 'resorts'), {
                name: formData.name.toLowerCase().replace(/ /g, '-'),
                location: formData.location,
                description: formData.description,
                thumbnail: formData.thumbnail,
                checkin: formData.checkin,
                checkout: formData.checkout,
                prices: formData.prices,
                includes: formData.includes,
                images: formData.images,
                createdAt: Timestamp.fromDate(new Date()),
                updatedAt: Timestamp.fromDate(new Date()),
            })
        } catch (err) {
            return alert(err)
        }

        setFormData(defaultData);
        router.push('/resorts/' + formData.name.toLowerCase().replace(/ /g, '-'));
        setError(null);
    };

    return (
        <>
            <AuthCheck>
                <NavbarComponent />
                <div className='flex flex-col items-center justify-center font-Poppins font-semibold'>
                    <h1 className='text-lg md:text-3xl'>Create - Resort</h1>
                    <form onSubmit={handleSubmit} className=" w-[20rem] md:w-[40rem]">

                        <DataForm formData={formData} setFormData={setFormData} />
                        <PricesForm formData={formData} setFormData={setFormData} />
                        <IncludesForm formData={formData} setFormData={setFormData} />
                        <ImageForm formData={formData} setFormData={setFormData} />
                        <div className="flex flex-col items-center justify-center w-full m-4">
                            <button className='m-2 flex flex-row items-center justify-center p-4 bg-blue-600 rounded-lg hover:scale-105 font-bold text-md ease-in-out duration-200 text-white px-12 py-4'>Save</button>
                            {error && <p className="m-2 rounded-lg py-2 px-6 bg-red-500 text-white">{error}</p>}
                        </div>
                        <div className="overflow-hidden">
                            <h1>Raw Data</h1>
                            <pre>{JSON.stringify(formData, null, 2)}</pre>
                        </div>
                    </form>
                    <UploadFile />
                </div>
                <Footer />
            </AuthCheck>
        </>
    )
}

export default CreatePage
