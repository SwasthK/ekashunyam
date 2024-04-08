import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import axios from "axios";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import GlobalError from "./Pages/GlobalError";
import Registration from "./Pages/FestRegistration";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements([
    [
      <Route path="/" element={<Home />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/register" element={<Registration />} />,
      <Route path="*" element={<GlobalError />} />,
    ],
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
