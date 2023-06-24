import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { Redirect } from "react-router-dom";

import "../Css/UserInfo.css";

const UserInfo = () => {
  const { user, logout } = React.useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="user-info-container">
      {user ? (
        <>
          <h3>Welcome, {user.name}!</h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default UserInfo;
