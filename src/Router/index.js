import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Login, Register } from "../Pages";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exace element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Routers;
