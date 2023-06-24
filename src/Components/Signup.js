import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Signup.css";
const Signup = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user credentials to local storage
    const user = { userEmail, userPassword };
    localStorage.setItem("user", JSON.stringify(user));

    // Perform any additional actions after successful signup
    history.goBack();
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={userEmail} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={userPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
