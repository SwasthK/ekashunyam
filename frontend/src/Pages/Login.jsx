import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "@/components/Login/Signup";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <p className="text-4xl text-gray-900 dark:text-white text-center mb-8 capitalize font-semibold">
          Credentials
        </p>
        <Signup></Signup>
      </div>
    </>
  );
};

export default Login;
