import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { db, postToJSON } from "../../lib/firebase";
import Card from '../Card';

function Resort() {
    const [resorts, setResorts] = useState([])
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let resorts = []
        const qr = query(collection(db, "resorts"), orderBy("createdAt", "asc"));
        resorts = await (await getDocs(qr)).docs.map(postToJSON);
        setResorts(resorts)
    }

    return (
        <section id='#resort'>
            <div className='mt-20 mb-20'>
                <div className='' >
                    <h2 className='font-Poppins font-bold text-underline'>Our Resort</h2>
                    <p className='font-Poppins font-normal mt-8 '>The Resorts We Offer</p>
                </div>
                <div className='flex justify-center items-center'>

                    <div className="card__container">
                        {resorts?.map((data, index) => {
                            if (index < 4) {
                                return <Card key={index} data={data} section="resorts" />
                            }
                            return null;
                        })}
                        <Card data={{ name: "Explore All", thumbnail: "/card-bg.jfif" }} section="resorts" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resort