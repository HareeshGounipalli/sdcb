import React, { createContext, useState, useEffect } from "react";
import {
  addToCartAPI,
  removeFromCartAPI,
  fetchCartAPI,
} from "../mock/cartApi";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from API on mount
    fetchCartAPI().then(setCart).catch(console.error);
  }, []);

  const addToCart = (item) => {
    addToCartAPI(item).then(setCart).catch(console.error);
  };

  const removeFromCart = (item) => {
    removeFromCartAPI(item).then(setCart).catch(console.error);
  };

  const loadCart = () => {
    fetchCartAPI().then(setCart).catch(console.error);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, loadCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
