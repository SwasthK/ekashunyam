import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getJwtToken from "@/utils/getJwtToken";

const Registration = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const jwtToken = getJwtToken();
    
    if (!jwtToken) {
      navigate("/");
      return;
    }

    const checkAuthentication = async () => {
      try {
        const response = await axios.post("/api/verifyToken", null, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        if (!response.data.authorized) {
          navigate("/");
          return;
        } else {
          setAuthenticated(true);
        }
      } catch (error) {
        console.error("Error in authorizing:", error);
        navigate("/");
      }
    };
    checkAuthentication();
  }, [navigate]);

  return authenticated ? <div className="festreg">Registration</div> : null;
};

export default Registration;
