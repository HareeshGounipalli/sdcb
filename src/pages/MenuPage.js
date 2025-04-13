import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../redux/foodSlice";
import { CartContext } from "../components/CartContext";
import "../styles/MenuPage.css";

export const ButtonsForCart = (cartItem, item, isAvailable) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className="quantity-controls">
      <button
        onClick={() => removeFromCart(item)}
        disabled={!isAvailable}
        className={!isAvailable ? "disabled-btn" : ""}
      >
        -
      </button>
      <span>{cartItem.quantity}</span>
      <button
        onClick={() => addToCart(item)}
        disabled={!isAvailable}
        className={!isAvailable ? "disabled-btn" : ""}
      >
        +
      </button>
    </div>
  );
};

const MenuPage = () => {
  const dispatch = useDispatch();
  const { cart, addToCart } = useContext(CartContext);
  const { foodItems, status, error } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="menu-page-container">
      <h1>Menu</h1>
      <div className="menu-list">
        {foodItems.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.id === item.id);
          const isAvailable = item.available;

          return (
            <div
              key={item.id}
              className={`menu-item ${!isAvailable ? "unavailable" : ""}`}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              {!isAvailable && (
                <p className="unavailable-msg">Not available for now</p>
              )}

              {cartItem ? (
                ButtonsForCart(cartItem, item, isAvailable)
              ) : (
                <button
                  className="menu-button"
                  onClick={() => addToCart(item)}
                  disabled={!isAvailable}
                >
                  {isAvailable ? "Add to Cart" : "Unavailable"}
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
