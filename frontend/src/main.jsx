import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";
import MensPage from "./pages/mensPage.jsx";
import WomensPage from "./pages/womensPage.jsx";
import ClothingPage from "./pages/clothingPage.jsx";
import ElectronicsPage from "./pages/electronicsPage.jsx";
import FurnituresPage from "./pages/furnituresPage.jsx";
import BeautySkincarePage from "./pages/beautySkincarePage.jsx";
import DecorePage from "./pages/decorePage.jsx";
import Footer from "./components/Footer.jsx";
import MultipurposComponent from "./components/multipurposComponent.jsx";
import ProductListingPage from "./pages/productListingPage.jsx";
import ProductDetailsPage from "./pages/productDetailsPage.jsx";
import ElectronicsHomePage from "./pages/electronicsPage.jsx";
import ImageSlider from "./components/ImageSlider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mens" element={<MensPage />} />
          <Route path="/womens" element={<WomensPage />} />
          <Route path="/clothings" element={<ClothingPage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route
            path="/electronicshomepage"
            element={<ElectronicsHomePage />}
          />
          <Route path="/furnitures" element={<FurnituresPage />} />
          <Route path="/beautySkincares" element={<BeautySkincarePage />} />
          <Route path="/homedecores" element={<DecorePage />} />
          <Route path="/productListings" element={<ProductListingPage />} />
          <Route path="/productDetails" element={<ProductDetailsPage />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/multipurpose" element={<MultipurposComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
