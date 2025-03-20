import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import "../styles/MenuPage.css";
import puri1 from "../assets/puri1.jpg";
import puri2 from "../assets/puri2.jpg";
import Masala from "../assets/Masala.webp";
import Spicy from "../assets/spicy.webp";

const foodItems = [
  { id: 1, name: "Pani Puri", price: 30, image: puri1 },
  { id: 2, name: "Bhel Puri", price: 40, image: puri2 },
  { id: 3, name: "Masala Puri", price: 50, image: Masala },
  { id: 4, name: "Spicy Puri", price: 35, image: Spicy },
];

const MenuPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu-page-container">
      <h1>Menu</h1>
      <div className="menu-list">
        {foodItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button className="menu-button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
