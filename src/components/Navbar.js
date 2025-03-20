import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/Navbar.css"; // Import the CSS file for styling
import { ShoppingCart } from "@mui/icons-material"; // Import the Cart icon from Material UI
import { AppBar, Toolbar, Typography, Button } from "@mui/material"; // Import Material UI components

const Navbar = () => {
  return (
    // AppBar is a Material UI component that acts as a navigation bar
    <AppBar position="sticky" sx={{ backgroundColor: "#ff9800" }}>
      <Toolbar>
        {/* Site title / Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SDC-B Pani Puri
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/menu">
          Menu
        </Button>
        <Button color="inherit" component={Link} to="/order-tracking">
          Orders
        </Button>

        {/* Cart Button */}
        <Button color="inherit" component={Link} to="/cart">
          <ShoppingCart sx={{ marginRight: "5px" }} /> Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
