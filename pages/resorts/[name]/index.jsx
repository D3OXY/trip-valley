import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../../components/Footer/Footer'
import NavbarComponent from '../../../components/Navbar/Navbar'
import WhatsAppIcon from '../../../components/WhatsAppIcon'
import data from '../../../components/data.json'


export async function getStaticPaths() {
    const resorts = data.resorts
    if (resorts) {
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

    //check if data has the resortname
    const resort = data.resorts.find((resort) => resort.name.toLowerCase() === name);
    if (resort) {
        return {
            props: {
                name: resort.name,
                image: resort.image,
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

                        <div className='min-w-[90vw] md:min-w-[50vw] border-2 border-black p-8'>
                            <div className='mb-4'>
                                <div className='flex flex-row border-2 border-black'>
                                    <div className='w-[50%] border-r-2 border-black flex items-center justify-center font-Poppins font-semibold p-2'>For Bachelors</div>
                                    <div className='w-[50%] border-l-2 border-black flex items-center justify-center font-Poppins font-semibold p-2'>650/-</div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className='flex flex-row border-2 border-black'>
                                    <div className='w-[50%] border-r-2 border-black flex items-center justify-center font-Poppins font-semibold p-2'>For Couples</div>
                                    <div className='w-[50%] border-l-2 border-black flex items-center justify-center font-Poppins font-semibold p-2'>1999/-</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
                            <div className='w-[100%] md:w-[50%] flex items-center justify-center'>
                                <div className='bg-[#08898F] rounded-lg w-80 p-4 m-4 '>
                                    <div className='flex flex-row m-4'>
                                        <div className='w-[50%] font-Poppins font-semibold text-white '>Check In</div>
                                        <div className='w-[50%] flex justify-end ' >
                                            <div className='font-Poppins font-semibold text-white'>10:00 AM</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row m-4'>
                                        <div className='w-[50%] font-Poppins font-semibold text-white '>Check Out</div>
                                        <div className='w-[50%] flex justify-end ' >
                                            <div className='font-Poppins font-semibold text-white '>1:00 AM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] md:w-[50%] flex flex-col items-center justify-center '>
                                <h2 className='font-Poppins font-bold '>Includes</h2>
                                <ul className='font-Poppins font-semibold '>
                                    <li>▶ Breakfast</li>
                                    <li>▶ Pool</li>
                                    <li>▶ Room</li>
                                    <li>▶ Games</li>
                                </ul>
                            </div>
                        </div>
                        <div className='font-Inter font-semibold m-4'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, recusandae delectus voluptatem illum eveniet nisi similique odio quo inventore a quidem beatae magnam vero officiis qui. Cum doloremque provident hic.
                        </div>

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