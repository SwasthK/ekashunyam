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


      toast.success(response.data.message, {
        duration: 2000,
        position: 'top-center',
      });
      console.log("Success: " + response.data.message);
      navigate('/register')

    }
    catch (error) {
      if (error.response && error.response.status >= 500) {
        console.log('Something went wrong!');
        toast.error("Something went wrong!", {
          duration: 2000,
          position: 'top-center',
        });
      }
      else if (error.message) {
        toast.error(error.message, {
          duration: 2000,
          position: 'top-center',
        });
        console.log(error.message);
      }
      else {
        console.log(error.response.data.message);
        toast.error(error.response.data.message), {
          duration: 2000,
          position: 'top-center',
        };
      }
    }
    finally {
      setLoading(false);
    }
  };

  return { loading, signinverify };
}

function errhandle(email, password) {
  if (!email || !password) {
    toast.error("Please fill all the fields !", {
      duration: 2000,
      position: 'top-center',
    });
    console.log("Please fill the fields !");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password should have at least 6 characters", {
      duration: 2000,
      position: 'top-center',
    });
    console.log("Password should have at least 6 characters");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Enter a valid email address", {
      duration: 2000,
      position: 'top-center',
    });
    console.log("Enter a valid email address");
    return false;
  }
  return true;
}

export default useSignin;
