import React from "react"; // Import React
import "./Footer.css"; // Import the CSS file for styling
import { Box, Typography } from "@mui/material"; // Material UI components for layout & text

const Footer = () => {
  return (
    // Box component is used for layout
    <Box className="footer">
      <Typography variant="body2">
        &copy; 2025 SDC-B Pani Puri. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
