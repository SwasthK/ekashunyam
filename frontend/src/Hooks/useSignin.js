import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';

function useSignin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signinverify = async ({ email, password }) => {
    const pass = errhandle(email, password);
    setLoading(true);

    if (!pass) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("api/user/login", {
        email: "swasthikk@gmail.com",
        password: "77484",
      });
      console.log(response.data);

      if (response.status === 200) {
        console.log(response.data);
        navigate("/register");
      } else {
        // Handle error status codes
        // navigate("/register");
        console.log("else somehting");
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
