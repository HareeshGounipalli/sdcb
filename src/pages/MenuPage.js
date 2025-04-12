import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../redux/foodSlice";
import { CartContext } from "../components/CartContext";
import "../styles/MenuPage.css";

const MenuPage = () => {
  const dispatch = useDispatch();
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const { foodItems, status, error } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="menu-page-container">
      <h1>Menu</h1>
      <div className="menu-list">
        {foodItems.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.id === item.id);

          return (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              {cartItem ? (
                <div className="quantity-controls">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              ) : (
                <button className="menu-button" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPage;
