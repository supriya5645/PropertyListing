import React from "react";
import UserInfo from "./UseInfo";
import PropertySearchForm from "../Components/PropertySearchForm";
import PropertyList from "../Components/PropertyList";
// import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <UserInfo />
      <PropertySearchForm />
      <PropertyList />
    </div>
  );
};

export default Dashboard;
