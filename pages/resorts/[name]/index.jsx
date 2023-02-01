import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../../components/Footer/Footer'
import NavbarComponent from '../../../components/Navbar/Navbar'
import WhatsAppIcon from '../../../components/WhatsAppIcon'
import data from '../../../components/data.json'


export async function getServerSideProps({ query }) {
    const name = query.name.toLowerCase();

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
            <div className='hero__alternative w-[100%] h-[300px]'>
                <div className='w-[100%] md:w-[50%] h-[100%] flex ml-32 flex-col pt-[30px] md:pt-0 md:justify-center items-start'>
                    <h1 className='font-Poppins font-bold text-4xl' >{props.name}</h1>
                    <p className='font-Poppins font-bold text-xl' >{props.name} Resort Details!</p>
                </div >
                <div className='w-[50%] h-[100%] hidden '></div>
            </div >
            <Container>
            </Container>
            <Footer />
            <WhatsAppIcon />
        </>
    )
}

export default Index