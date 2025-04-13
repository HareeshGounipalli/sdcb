import React, { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutPage.css";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleConfirm = () => {
    // Future: Call an API here to create order
    console.log("Order confirmed:", { ...userInfo, cart });
    navigate("/order-tracking");
  };

  const getPriceNumber = (price) =>
    typeof price === "string"
      ? parseFloat(price.replace(/[^0-9.]/g, ""))
      : price;

  const total = cart.reduce(
    (acc, item) => acc + getPriceNumber(item.price) * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        {/* Left: Delivery Info */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="form-paper">
            <Typography variant="h6" gutterBottom>
              Delivery Information
            </Typography>
            <TextField
              label="Full Name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Address"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={3}
              required
            />
            <TextField
              label="Email (optional)"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <FormLabel component="legend" style={{ marginTop: "1rem" }}>
              Payment Method
            </FormLabel>
            <RadioGroup
              row
              name="paymentMethod"
              value={userInfo.paymentMethod}
              onChange={handleChange}
            >
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery"
              />
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              <FormControlLabel value="card" control={<Radio />} label="Card" />
            </RadioGroup>
          </Paper>
        </Grid>

        {/* Right: Order Summary */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="summary-paper">
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>

            <div className="summary-items">
              {cart.map((item) => {
                const price = getPriceNumber(item.price);
                const subtotal = price * item.quantity;
                return (
                  <Card
                    key={item.id}
                    className="summary-card"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 80, height: 80, borderRadius: 2 }}
                      image={item.image}
                      alt={item.name}
                    />
                    <CardContent sx={{ flex: 1, paddingLeft: 2 }}>
                      <Typography>{item.name}</Typography>
                      <Typography variant="body2">
                        Qty: {item.quantity} | ₹{price} each
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        ₹{subtotal}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Typography variant="h6" className="summary-total">
              Total: ₹{total}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleConfirm}
            >
              Confirm Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
