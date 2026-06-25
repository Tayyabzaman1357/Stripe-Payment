import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plans from "./components/Plans";
import Success from "./components/Success";
import Cancel from "./components/Cancel";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Plans />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}