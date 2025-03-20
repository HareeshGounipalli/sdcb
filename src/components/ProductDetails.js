import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, Select, MenuItem } from "@mui/material";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const foodItems = useSelector((state) => state.food);
  const product = foodItems.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState("Medium");

  if (!product) return <h2>Product not found</h2>;

  return (
    <Box className="product-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <Typography variant="h4" className="product-title">{product.name}</Typography>
      <Typography variant="h6" className="product-price">{product.price}</Typography>

      <Box className="customization">
        <Typography variant="body1">Spice Level:</Typography>
        <Select value={spiceLevel} onChange={(e) => setSpiceLevel(e.target.value)}>
          <MenuItem value="Mild">Mild</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Spicy">Spicy</MenuItem>
        </Select>
      </Box>

      <Box className="quantity-selector">
        <Typography variant="body1">Quantity:</Typography>
        <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
        <Typography>{quantity}</Typography>
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      </Box>

      <Button variant="contained" color="primary" className="add-to-cart-btn">
        Add to Cart
      </Button>

      <Typography variant="body1" className="product-description">{product.description}</Typography>
    </Box>
  );
};

export default ProductDetails;
