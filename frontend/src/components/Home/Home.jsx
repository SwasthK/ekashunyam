import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const jwtToken = Cookies.get("access-token");
      if (jwtToken) {
        try {
          const response = await axios.post("/api/verifyToken", {
            token: jwtToken,
          });
          setIsAuthenticated(response.data.authorized);
        } catch (error) {
          console.error("Error in authorizing:", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };
    checkAuthentication();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <button>Edit</button>
      ) : (
        <button onClick={() => navigate("/register")}>Register</button>
      )}
    </div>
  );
};

export default Home;
