import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs'

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs />} />
  </Routes>
);

export default AppRoutes;