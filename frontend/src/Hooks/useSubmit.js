import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';

function useSubmit() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const formverify = async (formFields, setFormFields) => {
        const pass = errhandle(formFields);
        setLoading(true);

        if (!pass) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('/user/register', { formFields });

            if (response.status === 201) {
                alert("Form submitted successfully")
                navigate('/')
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
                return;
            }
        } catch (error) {
            console.log(error.message);
            if (error.response && error.response.data) {
                // toast.error(error.response.data.message);
                console.log(error.response.data.message);
            } else {
                // toast.error(error.message);
                console.log(error.message);
            }
        } finally {
            setLoading(false);
        }
    }
    return { loading, formverify };
}

const errhandle = (formFields) => {
    for (const eventId in formFields) {
        const event = formFields[eventId];
        for (const participant of event.participants) {
            if (participant.name.trim() === "" || participant.contact.trim() === "") {
                console.log("Empty value not allowed");
                return false;
            }
            if (participant.name.trim() === "" || !/^[a-zA-Z0-9]+$/.test(participant.name)) {
                console.log("Name is not valid");
                return false;
            }
            if (participant.contact.trim() === "" || !/^\d{10}$/.test(participant.contact)) {
                console.log("Contact is not valid");
                return false;
            }
        }
    }
    return true
};


export default useSubmit;
