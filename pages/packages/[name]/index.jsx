import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../../components/Footer/Footer'
import NavbarComponent from '../../../components/Navbar/Navbar'
import WhatsAppIcon from '../../../components/WhatsAppIcon'
import data from '../../../components/data.json'


export async function getStaticPaths() {
    const packages = data.packages
    if (packages) {
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

    //check if data has the resortname
    const tourPackage = data.packages.find((tourPackage) => tourPackage.name.toLowerCase() === name);
    if (tourPackage) {
        return {
            props: {
                name: tourPackage.name,
                image: tourPackage.image,
            }
        }
    } else {
        return {
            notFound: true,
        }
    }

}




function Index(props) {
    return (
        <>
            <NavbarComponent />
            <section>
                <div className='hero__alternative w-[100%] h-[500px]'>
                    <div className='w-[100%] md:w-[50%] h-[100%] flex flex-col pt-[100px] md:pt-0 md:justify-center items-center'>
                        < h1 className='text-black uppercase font-Poppins font-semibold text-5xl' >{props.name}</h1 >
                        <p className='text-black mb-4 md:mb-0 font-Poppins font-normal'>{props.name} Resort Details</p>
                    </div >
                    <div className='w-[50%] h-[100%] hidden '></div>
                </div >
            </section>
            <Container>
                <div className='flex flex-col items-center justify-center pt-12'>

                    <div className='min-w-[90vw] md:min-w-[50vw] max-w-[90vw] md:max-w-[50vw] mb-12'>

                    </div>

                    <div className='flex flex-col items-start justify-start w-[90vw] md:w-[70vw]'>
                        <h1 className='text-underline font-Poppins font-bold text-2xl'>Images</h1>
                        <div className='mt-6 flex flex-col items-center justify-center w-[90vw] md:w-[70vw] mb-12'>
                            <img src="/placeholder-img.jfif" alt="fffg" className='max-w-[80vw] md:max-w-[60vw] mt-4' />
                            <img src="/placeholder-img.jfif" alt="fffg" className='max-w-[80vw] md:max-w-[60vw] mt-4' />
                            <img src="/placeholder-img.jfif" alt="fffg" className='max-w-[80vw] md:max-w-[60vw] mt-4' />
                            <img src="/placeholder-img.jfif" alt="fffg" className='max-w-[80vw] md:max-w-[60vw] mt-4' />
                            <img src="/placeholder-img.jfif" alt="fffg" className='max-w-[80vw] md:max-w-[60vw] mt-4' />
                            <img src="/placeholder-img.jfif" alt="fffg" className='max-w-[80vw] md:max-w-[60vw] mt-4' />
                            <img src="/placeholder-img.jfif" alt="fffg" className='max-w-[80vw] md:max-w-[60vw] mt-4' />
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