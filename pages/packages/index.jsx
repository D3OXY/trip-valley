import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Card from '../../components/Card'
import Footer from '../../components/Footer/Footer'
import NavbarComponent from '../../components/Navbar/Navbar'
import WhatsAppIcon from '../../components/WhatsAppIcon'
import { db, postToJSON } from '../../lib/firebase'

function Packages() {
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
        <>
            <NavbarComponent />
            <section>
                <div className='hero__alternative w-[100%] h-[500px]'>
                    <div className='w-[100%] md:w-[50%] h-[100%] flex flex-col pt-[100px] md:pt-0 md:justify-center items-center'>
                        < h1 className='text-black uppercase font-Poppins font-semibold text-5xl' >Packages</h1 >
                        <p className='text-black mb-4 md:mb-0 font-Poppins font-normal'>Tour Packages </p>
                    </div >
                    <div className='w-[50%] h-[100%] hidden '></div>
                </div >
            </section>
            <Container>
                <section id='#resort'>
                    <div className='mt-20 mb-20'>
                        <div className='flex justify-center items-center'>
                            <div className="card__container">
                                {packages.map((data, index) => {
                                    return <Card key={index} data={data} section="packages" />
                                })}
                                {!packages.length && <h1 className='text-black uppercase font-Poppins font-semibold text-5xl'>No Packages Found</h1>}
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

export default Packages