import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../../components/Footer/Footer'
import NavbarComponent from '../../../components/Navbar/Navbar'
import WhatsAppIcon from '../../../components/WhatsAppIcon'
import data from '../../../components/data.json'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db, postToJSON } from '../../../lib/firebase'


export async function getStaticPaths() {
    const q = query(collection(db, "packages"), orderBy("createdAt", "asc"));
    const packages = await (await getDocs(q)).docs.map(postToJSON);
    if (packages.length) {
        const paths = packages.map((tourPackage) => ({
            params: { name: tourPackage.name.toLowerCase() },
        }))
        return {
            paths,
            fallback: false, // can also be true or 'blocking'
        }
    }
}


export async function getStaticProps({ params }) {
    const name = params.name.toLowerCase();
    const q = query(collection(db, "packages"), where("name", "==", name));
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
                        <p className='text-black mb-4 md:mb-0 font-Poppins font-normal'>Tour Package</p>
                    </div >
                </div >
            </section>
            <Container>
                <div className='flex flex-col items-center justify-center pt-12'>
                    <div className='m-12'>
                        <h2 className='font-Poppins font-bold w-[90vw] md:w-[40vw] '>{data.description}</h2>
                    </div>
                    <div>
                        {/* // // * Day Details */}
                        {data.days.map((day, index) => {
                            return (
                                <div key={index} className='m-4 p-6 border-2 border-black w-[350px] md:w-[650px] rounded-lg flex flex-col items-center justify-center '>
                                    <div className='flex justify-start w-full flex-col '>
                                        <h1 className='uppercase font-Poppins font-bold' >{day.title}</h1>
                                        <div className='m-10'>
                                            <div dangerouslySetInnerHTML={{ __html: day.description }} className="font-Poppins font-bold justify-start text-md" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                    <div className='min-w-[90vw] md:min-w-[50vw] max-w-[90vw] md:max-w-[50vw] mb-12'>
                        {/* // todo add content */}
                    </div>
                    <div className='flex flex-col items-start justify-start w-[90vw] md:w-[70vw]'>
                        <h1 className='text-underline font-Poppins font-bold text-2xl'>Images</h1>
                        <div className='mt-6 flex flex-col items-center justify-center w-[90vw] md:w-[70vw] mb-12'>
                            {/* // todo Make custom component for images based on data */}
                            {data.images.map((image, index) => {
                                return (
                                    <img key={index} src={image} alt={name} className='max-w-[80vw] md:max-w-[60vw] mt-4' />
                                )
                            })
                            }
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