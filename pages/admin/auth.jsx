import React, { useState } from 'react'
import { useAuth } from "../../lib/AuthContext"
import { useRouter } from 'next/router'

function Auth() {
    const router = useRouter()
    const { login, currentUser } = useAuth()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("🚀 ~ file: auth.jsx:23 ~ handleSubmit ~ currentUser", currentUser)

        // Firebase email and password authentication
        try {
            await login(formData.email, formData.password)
            router.push('/admin')
        } catch (error) {
            setError(error.message);
        }

        // Reset form
        setFormData({
            email: '',
            password: '',
        })
    }

    return (
        <div className='flex items-center justify-center h-[100vh] w-[100vw] font-Poppins'>
            <div className='rounded-lg border-2 border-black p-10 shadow-xl'>
                <h1 className='text-3xl font-bold m-4'>Admin Login</h1>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Auth