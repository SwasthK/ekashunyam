import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, click }) => {
  const navigate = useNavigate();
  return (
    <button
      className="py-5 border-2 border-black px-5 rounded-lg bg-slate-800 text-white font-bold hover:bg-black"
      onClick={() => navigate(click)}
    >
      {text}
    </button>
  );
};

export default Button;
