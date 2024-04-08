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
        const response = await axios.get("/api/user/verify");
        console.log(response);
        if (!response.data.success) {
          navigate("/login");
        } else {
          console.log("valid");
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
  });

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
