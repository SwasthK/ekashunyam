import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';

const colleges = ["College A", "College B", "College C", "College D", "College E"];

function useSignup() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const signupverify = async ({ college, email, password, confirmpassword }) => {
        const pass = errhandle(college, email, password, confirmpassword);
        setLoading(true);

        if (!pass) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:5000/chat/api/v1/user/signup',
                {
                    college,
                    email,
                    password,
                    confirmpassword
                },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwtToken}` 
                    }
                }
            );
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

    return { loading, signupverify };
}

function errhandle(college, email, password, confirmpassword) {
    if (!college || !email || !password || !confirmpassword) {
        // toast.error("Enter all details");
        console.log("all detail must");
        return false;
    }
    if (!colleges.includes(college)) {
        console.log("Invalid college selection");
        return;
    }
    if (password !== confirmpassword) {
        // toast.error("Passwords do not match");
        console.log("wrong passowrd");
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

export default useSignup;
