import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import NavbarComponent from '../../components/Navbar/Navbar'
import Card from '../../components/Card'
import WhatsAppIcon from '../../components/WhatsAppIcon'
import data from '../../components/data.json'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db, postToJSON } from '../../lib/firebase'

function Resorts() {
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
        <>
            <NavbarComponent />
            <section>
                <div className='hero__alternative w-[100%] h-[500px]'>
                    <div className='w-[100%] md:w-[50%] h-[100%] flex flex-col pt-[100px] md:pt-0 md:justify-center items-center'>
                        < h1 className='text-black uppercase font-Poppins font-semibold text-5xl' >Resorts</h1 >
                        <p className='text-black mb-4 md:mb-0 font-Poppins font-normal'>Our Resorts</p>
                    </div >
                    <div className='w-[50%] h-[100%] hidden '></div>
                </div >
            </section>
            <Container>
                <section id='#resort'>
                    <div className='mt-20 mb-20'>
                        <div className='flex justify-center items-center'>
                            <div className="card__container">
                                {resorts.map((data, index) => {
                                    return <Card key={index} data={data} section="resorts" />
                                })}
                                {!resorts.length && <h1 className='text-black uppercase font-Poppins font-semibold text-5xl'>No Packages Found</h1>}
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
            <Footer />
            <WhatsAppIcon />
        </>
    )
}

export default Resorts