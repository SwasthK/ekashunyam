import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "@/components/FesRegistration/Form";
// import getJwtToken from "@/utils/getJwtToken";

const Registration = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("/user/verifyToken");
        console.log(response);
        if (!response.data.authorized) {
          navigate("/login");
        } else {
          setAuthenticated(true);
        }
      } catch (error) {
        console.error("Error in authorizing:", error);
        navigate("/login");
      } finally {
        setloading(false);
      }
    };
    checkAuthentication();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : authenticated ? (
        <Form />
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default Registration;
