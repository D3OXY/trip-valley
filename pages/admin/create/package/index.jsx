import React, { useState, useEffect } from "react";
import AuthCheck from '../../../../components/AuthCheck'
import NavbarComponent from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer'
import { useRouter } from "next/router";
import UploadFile from "../../../../components/UploadFile";
import { db, postToJSON } from "../../../../lib/firebase"
import { collection, addDoc, Timestamp, getDocs, where, query } from 'firebase/firestore'
import DataForm from "./DataForm";
import DaysForm from "./DaysForm";
import ImageForm from "./ImageForm";
const defaultData = {
    name: '',
    description: '',
    thumbnail: '',
    days: [],
    images: []
};

function CreatePage() {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState(defaultData);

    const handleSubmit = async (e) => {
        setError(null);
        e.preventDefault();
        if (!formData.days.length) return setError('Please add at least one days');
        if (!formData.images) return setError('Please add at least one image');
        if (!formData.thumbnail.includes('https://')) return setError('Please add a valid thumbnail url');
        //check if the name is already in the firebase database
        const q = query(collection(db, "packages"), where("name", "==", formData.name));
        const packages = await (await getDocs(q)).docs.map(postToJSON);
        if (packages.length) return setError('Package with the name already exists');

        // console.log(formData);

        try {
            await addDoc(collection(db, 'packages'), {
                name: formData.name.toLowerCase().replace(/ /g, '-'),
                description: formData.description,
                thumbnail: formData.thumbnail,
                days: formData.days,
                images: formData.images,
                createdAt: Timestamp.fromDate(new Date()),
                updatedAt: Timestamp.fromDate(new Date()),
            })
        } catch (err) {
            return alert(err)
        }

        setFormData(defaultData);
        router.push('/packages/' + formData.name.toLowerCase().replace(/ /g, '-'));
        setError(null);
    };

    return (
        <>
            <AuthCheck>
                <NavbarComponent />
                <div className='flex flex-col items-center justify-center font-Poppins font-semibold'>
                    <h1 className='text-lg md:text-3xl'>Create - Package</h1>
                    <form onSubmit={handleSubmit} className=" w-[20rem] md:w-[40rem]">

                        <DataForm formData={formData} setFormData={setFormData} />
                        <DaysForm formData={formData} setFormData={setFormData} />
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
