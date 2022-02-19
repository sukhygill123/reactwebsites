import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route, Redirect } from "react-router-dom";
import About from './About';
import Contact from "./Contact";
import Service from "./Service";
import Navbhar from "./Navbhar";
const Apps = ()=>{
    return(
        <>
         <Navbhar />
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </>
    )
}
export default Apps;