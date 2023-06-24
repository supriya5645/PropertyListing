import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import { PropertyProvider } from "./Components/PropertyContext";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
