import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

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
            const response = await axios.post('api/user/fest/register', { formFields });

            if (response.data.success) {
                toast.success("Form submitted successfully")
                navigate('/')
            } else {
                toast.error("Error in submitting the form");
                console.log(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.status >= 500) {
                console.log('Something went wrong!');
                toast.error("Something went wrong!");
            }
            else {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
            }
            console.log(error.message);
            toast.error("Error in submitting the form");
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
                toast.error("Please fill all the fields");
                return false;
            }
            if (participant.name.trim() === "" || !/^[a-zA-Z0-9]+$/.test(participant.name)) {
                toast.error("Name is not valid");
                return false;
            }
            if (participant.contact.trim() === "" || !/^\d{10}$/.test(participant.contact)) {
                toast.error("Contact is not valid");
                return false;
            }
        }
    }
    return true
};

export default useSubmit;
