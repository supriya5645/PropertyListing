import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import { PropertyProvider } from "./Components/PropertyContext";

ReactDOM.render(
  <HashRouter>
    <AuthProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </AuthProvider>
  </HashRouter>,
  document.getElementById("root")
);
