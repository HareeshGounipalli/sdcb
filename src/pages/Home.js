
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import CustomerReviews from "../components/CustomerReviews";

export const ViewMenu = () => {
  return (
    <>
      <Link to="/menu">
        <button>View Menu</button>
      </Link>
      </>
  )
}


const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Pani Puri Store</h1>
      {ViewMenu()}
      {/* Navbar */}
      <nav className="navbar">
        <h1>SDC-B Pani Puri</h1>
      </nav>
<CustomerReviews/>
      {/* Welcome Message */}
      

      {/* View Menu Button */}
      
    </div>
  );
};

export default Home;
