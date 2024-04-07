import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
                '/user/register',
                {
                    email,
                    password,
                    collegeName: college,
                },

            );

            // Check for success status
            console.log(response);
            console.log(response.data);

            if (response.status === 201) {
                console.log(response.data);
                navigate('/register')
            } else {
                // Handle error status codes
                switch (response.status) {
                    case 404:
                        toast.error(response.data.message);
                        console.log('Error 404: ' + response.data.message);
                        break;
                    case 409:
                        toast.error(response.data.message);
                        console.log('Error 409: ' + response.data.message);
                        break;
                    default:
                        throw new Error('Error: ' + response.data.message)
                }
                navigate('/register')
            }
        } catch (error) {
            console.log(error.message);
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
                console.log(error.response.data.message);
            } else {
                toast.error(error.message);
                console.log(error.message);
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
