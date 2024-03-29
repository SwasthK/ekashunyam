import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Registration = () => {
  const nav = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const jwtToken = Cookies.get("access-token");
        if (!jwtToken) {
          navigate("/");
          return;
        }
        const response = await axios.post("/api/verifyToken", {
          token: jwtToken,
        });
        if (!response.data.authorized) {
          navigate("/");
          return;
        }
      } catch (error) {
        console.error("Error in authorizing:", error);
        navigate("/");
        return;
      }
    };
    checkAuthentication();
  }, [nav]);

  return <div className="festreg">Registration</div>;
};

export default Registration;
