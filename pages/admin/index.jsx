import React from 'react'
import AuthCheck from '../../components/AuthCheck'

function AdminDashboard() {
    return (
        <AuthCheck>
            <div>AdminDashboard</div>
        </AuthCheck>
    )
}

export default AdminDashboard