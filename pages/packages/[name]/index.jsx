import React, { useState } from 'react'
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
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmit = () => {
        setOutput(input.replace(/\n/g, "<br />"));
    };
    return (
        <>
            <NavbarComponent />
            <section>
                <div className='hero__alternative w-[100%] h-[500px]'>
                    <div className='w-[100%] md:w-[50%] h-[100%] flex flex-col pt-[100px] md:pt-0 md:justify-center items-center'>
                        < h1 className='text-black uppercase font-Poppins font-semibold text-5xl' >{props.name}</h1 >
                        <p className='text-black mb-4 md:mb-0 font-Poppins font-normal'>{props.name} Package</p>
                    </div >
                    <div className='w-[50%] h-[100%] hidden '></div>
                </div >
            </section>
            <Container>
                {/* // * Main Container */}
                <div className='flex flex-col items-center justify-center pt-12'>
                    {/* // * Top Section - Description and Day Details */}
                    <div className='m-12'>
                        <h2 className='font-Poppins font-medium '>Extra Text if  admin wants to write anything make </h2>
                    </div>
                    <div>
                        {/* // // * Day Details */}
                        <div className='m-4 p-6 border-2 border-black w-[350px] md:w-[650px] rounded-lg flex flex-col items-center justify-center '>
                            <div className='flex justify-start w-full '>
                                <h1 className='uppercase font-Poppins font-bold' >DAY 1 : PORT BLAIR TOUR</h1>
                            </div>
                            <div className='m-10'>
                                <p className='font-Poppins font-medium'>
                                    · Pick up from Airport <br />
                                    · Check-in Hotel <br />
                                    · Cellular Jail <br />
                                    · Carbyn's cove beach <br />
                                    · Light show (Hindi) <br />
                                    · Dinner <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo aliquid neque deserunt obcaecati temporibus quibusdam, maiores beatae quam nostrum consequuntur autem, necessitatibus dolorum consectetur aliquam adipisci architecto ipsum nihil?
                                </p>
                            </div>
                        </div>
                        {/* // // * Day Details */}
                        <div className='m-4 p-6 border-2 border-black w-[350px] md:w-[650px] rounded-lg flex flex-col items-center justify-center '>
                            <div className='flex justify-start w-full '>
                                <h1 className='uppercase font-Poppins font-bold' >DAY 2 : PORT BLAIR TOUR</h1>
                            </div>
                            <div className='m-10'>
                                <p className='font-Poppins font-medium'>
                                    · Pick up from Airport <br />
                                    · Check-in Hotel <br />
                                    · Cellular Jail <br />
                                    · Carbyn's cove beach <br />
                                    · Light show (Hindi) <br />
                                    · Dinner <br />
                                </p>
                            </div>
                        </div>
                        {/* // // * Day Details */}
                        <div className='m-4 p-6 border-2 border-black w-[350px] md:w-[650px] rounded-lg flex flex-col items-center justify-center '>
                            <div className='flex justify-start w-full '>
                                <h1 className='uppercase font-Poppins font-bold' >DAY 3 : PORT BLAIR TOUR</h1>
                            </div>
                            <div className='m-10'>
                                <p className='font-Poppins font-medium'>
                                    · Pick up from Airport <br />
                                    · Check-in Hotel <br />
                                    · Cellular Jail <br />
                                    · Carbyn's cove beach <br />
                                    · Light show (Hindi) <br />
                                    · Dinner <br />
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className='min-w-[90vw] md:min-w-[50vw] max-w-[90vw] md:max-w-[50vw] mb-12'>
                        {/* // todo add content */}
                    </div>
                    {/* // * Bottom Section - Images */}
                    <div className='flex flex-col items-start justify-start w-[90vw] md:w-[70vw]'>
                        <h1 className='text-underline font-Poppins font-bold text-2xl'>Images</h1>
                        <div className='mt-6 flex flex-col items-center justify-center w-[90vw] md:w-[70vw] mb-12'>
                            {/* // todo Make custom component for images based on data */}
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