import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import "./FeaturedItems.css"; // Import CSS for styling

// Dummy data for featured items
const featuredItems = [
  { id: 1, name: "Spicy Pani Puri", price: "₹50", image: 'puri1.jpg' },
  { id: 2, name: "Meetha Pani Puri", price: "₹55", image: "puri2.jpg" },
  { id: 3, name: "Extra Crispy Pani Puri", price: "₹60", image: "puri4.jpg" },
];

const FeaturedItems = () => {
  return (
    <div className="featured-container">
      <Typography variant="h4" className="featured-title">
        Popular Pani Puri
      </Typography>
      <Grid container spacing={3} className="featured-grid">
        {featuredItems.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <Card className="featured-card">
              <CardMedia component="img" height="250" image={item.image} alt={item.name} />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.price}
                </Typography>
                <Button variant="contained" color="primary" className="add-to-cart-btn">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedItems;
