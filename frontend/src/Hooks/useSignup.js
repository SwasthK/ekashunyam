import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const colleges = [
    "College A",
    "College B",
    "College C",
    "College D",
    "College E",
];

function useSignup() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const signupverify = async ({ college, email, password, confirmpassword }) => {

        const pass = errhandle(college, email, password, confirmpassword);
        setLoading(true);

        if (!pass) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                '/api/user/register',
                {
                    email,
                    password,
                    collegeName: college,
                },
            );
            if (!response.data.success) {
                toast.error(response.data.message);
                console.log("Error: " + response.data.message);
            } else if (response.data.success) {
                toast.success(response.data.message);
                console.log("Success: " + response.data.message);
                navigate('/register')
            }
        } catch (error) {
            toast.error("Something went wrong!");
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signupverify };
}

function errhandle(college, email, password, confirmpassword) {
    if (!college || !email || !password || !confirmpassword) {
        toast.error("Please fill the fields !");
        console.log("Please fill the fields !");
        return false;
    }
    if (!colleges.includes(college)) {
        toast.error("Invalid college selection");
        console.log("Invalid college selection");
        return;
    }
    if (password !== confirmpassword) {
        toast.error("Passwords do not match");
        console.log("Passwords do not match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password should have at least 6 characters");
        console.log("Password should have at least 6 characters");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toast.error("Enter a valid email address");
        console.log("Enter a valid email address");
        return false;
    }
    return true;
}

export default useSignup;
