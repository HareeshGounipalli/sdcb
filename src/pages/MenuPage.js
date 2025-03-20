import React from "react";
import "../styles/MenuPage.css";

const foodItems = [
  { id: 1, name: "Pani Puri", price: 40, image: require("../assets/puri1.jpg") },
  { id: 2, name: "Bhel Puri", price: 50, image: require("../assets/puri2.jpg") },
  { id: 3, name: "Masala Puri", price: 60, image: require("../assets/Masala.webp") },
  { id: 4, name: "Spicy Puri", price: 55, image: require("../assets/spicy.webp") },
  { id: 5, name: "Meetha Puri", price: 50, image: require("../assets/Meetha.webp") },
  { id: 6, name: "Cheese Puri", price: 70, image: require("../assets/chees.webp") }
];

const MenuPage = ({ addToCart }) => {
  return (
    <div className="menu-page-container">
      <h1>Menu</h1>
      <ul className="menu-list">
        {foodItems.map((item) => (
          <li key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button className="menu-button" onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
