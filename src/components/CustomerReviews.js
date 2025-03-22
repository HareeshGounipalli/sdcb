import React, { useState } from "react";
import "../styles/CustomerReviews.css";

const reviews = [
  {
    id: 1,
    name: "Ravi Kumar",
    rating: 5,
    review: "Best Pani Puri I've ever had! The flavors are amazing!",
  },
  {
    id: 2,
    name: "Sneha Sharma",
    rating: 4,
    review: "Great taste and crispy puris. Loved it!",
  },
  {
    id: 3,
    name: "Amit Verma",
    rating: 5,
    review: "Authentic and delicious. Will order again for sure!",
  },
];

const CustomerReviews = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews-container">
      <h2>What Our Customers Say</h2>
      <div className="review-card">
        <p className="review-text">"{reviews[index].review}"</p>
        <p className="reviewer">- {reviews[index].name}</p>
        <div className="star-rating">
          {"⭐".repeat(reviews[index].rating)}
        </div>
      </div>
      <div className="review-buttons">
        <button onClick={prevReview}>← Prev</button>
        <button onClick={nextReview}>Next →</button>
      </div>
    </div>
  );
};

export default CustomerReviews;
