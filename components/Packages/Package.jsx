import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { db, postToJSON } from "../../lib/firebase";
import Card from '../Card';

function Package() {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let packages = []
        const qp = query(collection(db, "packages"), orderBy("createdAt", "asc"));
        packages = await (await getDocs(qp)).docs.map(postToJSON);
        setPackages(packages)
    }

    return (
        <section id='#resort'>
            <div className='mt-20 mb-20'>
                <div className='' >
                    <h2 className='font-Poppins font-bold text-underline'>Our Packages</h2>
                    <p className='font-Poppins font-normal mt-8 '>Package Options Offered</p>
                </div>
                <div className='flex justify-center items-center '>

                    <div className="card__container">
                        {packages.map((data, index) => {
                            if (index < 4) {
                                return <Card key={index} data={data} section="packages" />
                            }
                            return null;
                        })}
                        <Card data={{ name: "Explore All", thumbnail: "/card-bg.jfif" }} section="packages" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package