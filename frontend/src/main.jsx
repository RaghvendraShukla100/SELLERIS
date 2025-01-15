import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";
import MensPage from "./pages/mensPage.jsx";
import WomensPage from "./pages/womensPage.jsx";
import ClothingPage from "./pages/clothingPage.jsx";
import ElectronicsPage from "./pages/electronicsPage.jsx";
import FurnituresPage from "./pages/furnituresPage.jsx";
import BeautySkincarePage from "./pages/BeautySkincarePage.jsx";
import DecorePage from "./pages/decorePage.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menspage" element={<MensPage />} />
        <Route path="/womenspage" element={<WomensPage />} />
        <Route path="/clothingPage" element={<ClothingPage />} />
        <Route path="/electronicsPage" element={<ElectronicsPage />} />
        <Route path="/furnituresPage" element={<FurnituresPage />} />
        <Route path="/beautySkincarePage" element={<BeautySkincarePage />} />
        <Route path="/decoreHomePage" element={<DecorePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
