import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import KPSC from "./Pages/KPSC";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StudyMaterial from "./Pages/StudyMaterial";
import Layout from "./Componants/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap all pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/kpsc" element={<KPSC />} />
          <Route path="*" element={<StudyMaterial />} />
        </Route>

        {/* Pages without layout (like auth pages) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
