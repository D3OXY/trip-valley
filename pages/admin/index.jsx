import React from 'react'
import AuthCheck from '../../components/AuthCheck'
import { useAuth } from '../../lib/AuthContext'

function AdminDashboard() {
    const { logout } = useAuth()
    return (
        <AuthCheck>
            <div>
                <h1>AdminDashboard</h1>
                <button onClick={() => {
                    logout();
                }} >LogOut</button>
            </div>
        </AuthCheck>
    )
}

export default AdminDashboard