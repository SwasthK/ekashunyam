import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';

function useSubmit() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const formverify = async ({ email, password }) => {
        const pass = errhandle(email, password);
        setLoading(true);

        if (!pass) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('/user/login', {
                email,
                password,
            });
            console.log(response.data.sucess);

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
                // navigate('/register')
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

    return { loading, formverify };
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

export default useSubmit;
