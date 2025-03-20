import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const food = useSelector((state) => state.food.food);
  const product = food.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>

      <div>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
