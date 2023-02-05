import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../../components/Footer/Footer'
import NavbarComponent from '../../../components/Navbar/Navbar'
import WhatsAppIcon from '../../../components/WhatsAppIcon'
import data from '../../../components/data.json'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db, postToJSON } from '../../../lib/firebase'


export async function getStaticPaths() {
    const q = query(collection(db, "resorts"), orderBy("createdAt", "asc"));
    const resorts = await (await getDocs(q)).docs.map(postToJSON);
    if (resorts.length) {
        const paths = resorts.map((resort) => ({
            params: { name: resort.name.toLowerCase() },
        }))
        return {
            paths,
            fallback: false, // can also be true or 'blocking'
        }
    }
}


export async function getStaticProps({ params }) {
    const name = params.name.toLowerCase();
    const q = query(collection(db, "resorts"), where("name", "==", name));
    const data = await (await getDocs(q)).docs.map(postToJSON);

    if (data.length) {
        return {
            props: { data }
        }
    } else {
        return {
            notFound: true,
        }
    }

}




function Index(props) {
    const [data, setData] = useState(props.data[0]);
    let name = data.name.replace(/-/g, ' ');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <>
            <NavbarComponent />
            <section>
                <div className='hero__alternative w-[100%] h-[500px] flex items-center justify-center'>
                    <div className='w-full h-[100%] flex flex-col justify-center items-center'>
                        < h1 className='text-black font-Poppins font-extrabold text-2xl md:text-5xl text-center' >{name}</h1 >
                        <p className='text-black mb-4 md:mb-0 font-Poppins font-normal'>Resort</p>
                    </div >
                </div >
            </section>
            <Container>
                <div className='flex flex-col items-center justify-center pt-12'>

                    <div className='min-w-[90vw] md:min-w-[50vw] max-w-[90vw] md:max-w-[50vw] mb-12'>

                        <div className='min-w-[90vw] md:min-w-[50vw] border-2 border-black p-8'>
                            {data.prices.map((price, index) => {
                                return (
                                    <div key={index} className='mb-4'>
                                        <div className='flex flex-row border-2 border-black'>
                                            <div className='w-[50%] border-r-2 border-black flex items-center justify-center font-Poppins font-semibold p-2'>{price.name}</div>
                                            <div className='w-[50%] border-l-2 border-black flex items-center justify-center font-Poppins font-semibold p-2'>{price.amount}</div>
                                        </div>
                                    </div>
                                )

                            })}
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
                            <div className='w-[100%] md:w-[50%] flex items-center justify-center'>
                                <div className='bg-[#08898F] rounded-lg w-80 p-4 m-4 '>
                                    <div className='flex flex-row m-4'>
                                        <div className='w-[50%] font-Poppins font-semibold text-white '>Check In</div>
                                        <div className='w-[50%] flex justify-end ' >
                                            <div className='font-Poppins font-semibold text-white'>{data.checkin}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row m-4'>
                                        <div className='w-[50%] font-Poppins font-semibold text-white '>Check Out</div>
                                        <div className='w-[50%] flex justify-end ' >
                                            <div className='font-Poppins font-semibold text-white '>{data.checkout}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] md:w-[50%] flex flex-col items-center justify-center '>
                                <h2 className='font-Poppins font-bold '>Includes</h2>
                                <ul className='font-Poppins font-semibold '>
                                    {data.includes.map((include, index) => {
                                        return (
                                            <li key={index}>▶ {include}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='font-Inter font-semibold m-4 text-center'>
                            {data.description}
                        </div>

                    </div>

                    <div className='flex flex-col items-start justify-start w-[90vw] md:w-[70vw]'>
                        <h1 className='text-underline font-Poppins font-bold text-2xl'>Images</h1>
                        <div className='mt-6 flex flex-col items-center justify-center w-[90vw] md:w-[70vw] mb-12'>
                            {data.images.map((image, index) => {
                                return (
                                    <img key={index} src={image} alt={name} className='max-w-[80vw] md:max-w-[60vw] mt-4' />
                                )
                            })}
                        </div>
                    </div>

                </div>
            </Container>
            <Footer />
            <WhatsAppIcon />
        </>
    )
}

export default Index