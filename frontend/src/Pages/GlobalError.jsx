import React from "react";
import { useNavigate } from "react-router-dom";

const GlobalError = () => {
  const navigate = useNavigate();
  return (
    <div className="err">
      <p>Oops , page not found</p>
      <button className="btn" onClick={() => navigate("/")}>
        Go back
      </button>
    </div>
  );
};

export default GlobalError;
