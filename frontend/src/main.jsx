import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Credentials from "./components/Credentials/Credentials";
import Registration from "./components/Fest_Reg/Registration";
import ErrorRoute from "./components/ErrorComponent/ErrorRoute";

const router = createBrowserRouter(
  createRoutesFromElements([
    [
      <Route path="/" element={<Home />} />,
      <Route path="/credentials" element={<Credentials />} />,
      <Route path="/register" element={<Registration />} />,
      <Route path="*" element={<ErrorRoute />} />,
    ],
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
