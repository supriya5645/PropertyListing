import React from "react";
import { Link } from "react-router-dom";
// import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h2>Real Estate Listings</h2>
      <p>Welcome to the Real Estate Listings website!</p>
      <p>
        Please sign up or log in to access the property listings and other
        features.
      </p>
      {localStorage.getItem("user") ? (
        <Link to="/login">Login Now!</Link>
      ) : (
        <Link to="/signup">New User Signup!</Link>
      )}
    </div>
  );
};

export default HomePage;
