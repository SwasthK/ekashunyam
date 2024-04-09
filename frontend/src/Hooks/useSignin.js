import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

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
      const response = await axios.post('api/user/login', {
        email,
        password,
      });
      if (!response.data.success) {
        toast.error(response.data.message);
        console.log("Error: " + response.data.message);
      } else if (response.data.success) {
        toast.success(response.data.message);
        console.log("Success: " + response.data.message);
        navigate('/register')
      }
    }
    catch (error) {
      toast.error("Something went wrong!");
      console.log(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  return { loading, signinverify };
}

function errhandle(email, password) {
  if (!email || !password) {
    toast.error("Please fill the fields !");
    console.log("Please fill the fields !");
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

export default useSignin;
