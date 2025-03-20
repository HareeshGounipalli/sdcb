import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Pani Puri Store</h1>
      <Link to="/menu">
        <button>View Menu</button>
      </Link>
    </div>
  );
};

export default Home;
