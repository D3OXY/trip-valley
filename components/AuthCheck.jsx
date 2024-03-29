import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import { useAuth } from '../lib/AuthContext';

const AuthCheck = ({ children }) => {
    const { currentUser } = useAuth();
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) {
            router.push("/admin/auth");
        }
    }, [router, currentUser])

    return <>{currentUser ? children : null}</>
};

export default AuthCheck;
