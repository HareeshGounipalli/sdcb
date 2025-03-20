import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if item already exists in the cart
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        console.log(`${item.name} is already in the cart.`);
        return prevCart; // If exists, return previous cart (no duplicates)
      } else {
        console.log(`Added to cart: ${item.name}`);
        return [...prevCart, item]; // Add new item if not in cart
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
