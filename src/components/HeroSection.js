import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./HeroSection.css"; // Import CSS for styling

const HeroSection = () => {
  return (
    <Box className="hero-section">
      <Typography variant="h3" className="hero-title">
        The Best Pani Puri in Town!
      </Typography>
      <Typography variant="h6" className="hero-subtitle">
        Fresh & Crispy Pani Puris Delivered to Your Doorstep
      </Typography>
      <Button variant="contained" className="hero-button" href="/menu">
        Order Now
      </Button>
    </Box>
  );
};

export default HeroSection;
