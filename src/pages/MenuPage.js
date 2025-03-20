import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const foodItems = useSelector((state) => state.food);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>{item.name} - {item.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
