import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';

function useSignin() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const signinverify = async ({ email, password }) => {
        const pass = errhandle(email, password);
        setLoading(true);

        if (!pass) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/chat/api/v1/user/signup', {
                college,
                email,
                password,
                confirmpassword
            }, {
                withCredentials: true
            });

            if (response.data.error) {
                throw new Error(response.data.error);
            }

            navigate('/register')
        } catch (error) {
            // Handle error with email format or server response
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return { loading, signinverify };
}

function errhandle(email, password) {
    if (!email || !password) {
        // toast.error("Enter all details");
        console.log("enter all details");
        return false;
    }

    if (password.length < 6) {
        // toast.error("Password should have at least 6 characters");
        console.log("6 char must");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        // toast.error("Enter a valid email address");
        console.log("not an email");
        return false;
    }
    return true;
}

export default useSignin;
