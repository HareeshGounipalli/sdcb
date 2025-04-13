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

} from "@mui/material";
import { ButtonsForCart } from "../pages/MenuPage";
import {ViewMenu} from "../pages/Home";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cart, } = useContext(CartContext);
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
    <div
        className={`cart-page-container ${
        cart.length === 0 ? "single-column" : "multi-column"
        }`}
    >
    {cart.length === 0 ? (
    <div className="EmptyCartTitle">
        <Typography variant="h6">Your cart is empty. Add some items!</Typography><ViewMenu />
    
    </div>
    ) : (
        <Grid container spacing={2}>
        {cart.map((item) => {
          const price = getPriceNumber(item.price);
          const subtotal = price * item.quantity;
          const cartItem = cart.find((cartItem) => cartItem.id === item.id);
            
            return (
              <Grid item xs={12} md={4} key={item.id}>
                <Card
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: 2,
                    borderRadius: 3,
                    boxShadow: 3,
                    height: 160,
                    gap: 2,
                    backgroundColor: "#fff"
                }}
                >
                <CardMedia
                    component="img"
                    sx={{
                    width: 120,
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 2,
                    marginRight: 2
                    }}
                    image={item.image}
                    alt={item.name}
                />
                <CardContent sx={{ flex: 1, padding: "0 !important" }}>
                    <Typography variant="h6" gutterBottom>
                    {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Price: ₹{price}
                    </Typography>

                    <div style={{ margin: "8px 0" }}>
                    {ButtonsForCart(cartItem, item)}
                    </div>

                    <Typography variant="body2" fontWeight="bold">
                    Subtotal: ₹{subtotal}
                    </Typography>
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
