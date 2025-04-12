import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Convert item.price to number safely
  const getPriceNumber = (price) => {
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^0-9.]/g, ""));
    }
    return price;
  };

  const total = cart.reduce(
    (acc, item) => acc + getPriceNumber(item.price) * item.quantity,
    0
  );

  return (
    <div className="cart-page-container">
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cart.map((item) => {
            const price = getPriceNumber(item.price);
            const subtotal = price * item.quantity;

            return (
              <Grid item xs={12} md={6} key={item.id}>
                <Card sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 120 }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ₹{price}
                    </Typography>

                    <Box className="quantity-controls">
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </Button>
                      <Box
                        sx={{
                          mx: 2,
                          px: 2,
                          border: "1px solid orange",
                          borderRadius: "4px",
                        }}
                      >
                        {item.quantity}
                      </Box>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>
                    </Box>

                    <Typography variant="body2">Subtotal: ₹{subtotal}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <Typography variant="h6">Total: ₹{total}</Typography>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/checkout")}
          >
            PROCEED TO CHECKOUT
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
