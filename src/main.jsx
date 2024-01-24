import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import CountriesInfoPage from "./components/routes/CountriesInfoPage.jsx";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/country/:country" element={<CountriesInfoPage />} />
    </Routes>
  </BrowserRouter>
);
