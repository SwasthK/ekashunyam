import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  <RouterProvider router={router} />
);
