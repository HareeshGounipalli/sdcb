import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <CartProvider className="page-wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
