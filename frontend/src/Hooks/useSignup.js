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



    // Button code
    // <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    //   Shimmer
    // </button>

    // tailwind.config.js code





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
            if (!response.data) {
                console.log('No response!');
                toast.error("No response!");
            }
            toast.success(response.data.message);
            console.log("Success: " + response.data.message);
            navigate('/register')
        } catch (error) {
            if (error.response && error.response.status >= 500) {
                console.log('Something went wrong!');
                toast.error("Something went wrong!");
            }
            else if(error.message){
                toast.error(error.message);
                console.log(error.message);
            }
            else {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
            }
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
