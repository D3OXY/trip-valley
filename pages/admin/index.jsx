import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore"
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { ImBin } from 'react-icons/im'
import AuthCheck from '../../components/AuthCheck'
import Footer from '../../components/Footer/Footer'
import NavbarComponent from '../../components/Navbar/Navbar'
import { useAuth } from '../../lib/AuthContext'
import { db, postToJSON } from "../../lib/firebase"

export async function getServerSideProps(context) {
    let resorts = []
    const qr = query(collection(db, "resorts"), orderBy("createdAt", "asc"));
    resorts = await (await getDocs(qr)).docs.map(postToJSON);

    let packages = []
    const qp = query(collection(db, "packages"), orderBy("createdAt", "asc"));
    packages = await (await getDocs(qp)).docs.map(postToJSON);

    return {
        props: { resorts, packages },
    }
}

function AdminDashboard(props) {
    const { logout } = useAuth()
    const router = useRouter()
    const [resorts, setResorts] = useState(props.resorts)
    const [packages, setPackages] = useState(props.packages)

    return (
        <>
            <AuthCheck>
                <>
                    <NavbarComponent />
                    <Container className='px-2 md:px-24 font-Poppins'>
                        <div className='py-2 font-bold flex flex-row justify-between items-center border-b-2 border-black mb-8'>
                            <h1 className='text-lg md:text-3xl'>AdminDashboard</h1>
                            <button className='p-4 bg-red-600 rounded-lg hover:bg-red-900' onClick={() => { logout(); }} >LogOut</button>
                        </div>
                        <div className='my-2 text-2xl w-full'>
                            <div className='flex flex-row items-center justify-between'>
                                <h1 className='text-underline font-bold'>Resorts</h1>
                                <button onClick={() => router.push('/admin/create/resort')} className='flex flex-row items-center justify-center p-4 bg-blue-600 rounded-lg hover:scale-105 font-bold text-sm ease-in-out duration-200'>+Add </button>
                            </div>
                            <div className='my-4 p-2 w-full'>
                                {resorts.map((resort, index) => {
                                    return (
                                        <Card key={index} data={resort} section="resorts" />
                                    )

                                })}
                                {!resorts.length && <h1 className='text-center'>No Resorts Found</h1>}
                            </div>
                        </div>
                        <div className='my-2 text-2xl'>
                            <div className='flex flex-row items-center justify-between'>
                                <h1 className='text-underline font-bold'>Packages</h1>
                                <button onClick={() => router.push('/admin/create/package')} className='flex flex-row items-center justify-center p-4 bg-blue-600 rounded-lg hover:scale-105 font-bold text-sm ease-in-out duration-200'>+Add </button>
                            </div>
                            <div className='my-4 p-2 w-full'>
                                {packages.map((tripPackage, index) => {
                                    return (
                                        <Card key={index} data={tripPackage} section="packages" router={router} />
                                    )

                                })}
                                {!packages.length && <h1 className='text-center'>No Packages Found</h1>}
                            </div>
                        </div>
                    </Container>
                    <Footer />
                </>
            </AuthCheck>
        </>
    )
}

export default AdminDashboard




function Card({ data, section }) {
    const router = useRouter()
    return (
        <div className='m-2 p-3 border-2 border-black rounded-lg flex flex-row justify-between items-center w-full hover:scale-[0.98] ease-in-out duration-200 cursor-pointer'>
            <h1 onClick={() => router.push(`/${section.toLowerCase()}/${data.name.toLowerCase()}`)} >{data.name.replace(/-/g, ' ').charAt(0).toUpperCase() + data.name.slice(1)}</h1>
            <ImBin onClick={() => handleDelete(data.id, section, router)} className='w-14 h-14 p-2 rounded-lg bg-red-500 text-white hover:scale-95 ease-in-out duration-200 cursor-pointer' />
        </div>
    )
}

async function handleDelete(id, section, router) {
    const confirm = window.confirm("Are you sure you want to delete this item?")
    if (confirm) {
        const noteRef = doc(db, section, id);
        await deleteDoc(noteRef);
        router.reload()
    }

}