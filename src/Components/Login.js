import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "../Css/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { login } = React.useContext(AuthContext);
  // Retrieve user credentials from local storage on component mount
  const storedUser = localStorage.getItem("user");
  // if (storedUser) {
  //   const { email, password } = JSON.parse(storedUser);
  //   setEmail(email);
  //   setPassword(password);
  // }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the login logic using your authentication mechanism
    // For now, let's just log the email and password

    let { userEmail, userPassword } = JSON.parse(storedUser);
    // Check if the login is successful (dummy condition)
    const isLoggedIn = email === userEmail && password === userPassword;

    if (isLoggedIn) {
      // Clear the input fields
      setEmail("");
      setPassword("");
      // Navigate to the dashboard
      console.log(history);
      login();
      history.push("/dashboard");
    } else {
      // Handle login error
      console.log("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
