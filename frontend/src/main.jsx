import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Login,
  LoginUser,
  LoginDoctor,
  Signup,
  SignupUser,
  SignupDoctor,
} from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="login-doctor" element={<LoginDoctor />} />
      <Route path="login-user" element={<LoginUser />} />
      <Route path="signup-user" element={<SignupUser />} />
      <Route path="signup-doctor" element={<SignupDoctor />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
