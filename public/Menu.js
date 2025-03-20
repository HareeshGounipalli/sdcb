import React from "react";
import "../styles/Menu.css"; // Ensure CSS file is linked properly

const Menu = ({ foodItems, addToCart }) => {
  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            <img
              src={
                item.name === "Pani Puri"
                  ? require("../assets/puri1.jpg")
                  : item.name === "Bhel Puri"
                  ? require("../assets/puri2.jpg")
                  : item.name === "Masala Puri"
                  ? require("../assets/Masala.webp")
                  : require("../assets/spicy.webp")
              }
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
