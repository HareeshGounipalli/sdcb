import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const { food, status } = useSelector((state) => state.food);

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>Error loading menu.</h2>;

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {food.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>
              {item.name} - ₹{item.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
