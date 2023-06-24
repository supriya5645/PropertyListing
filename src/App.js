import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import HomePage from "./Components/HomePage";
import Dashboard from "./Components/Dashboard";
import { AuthContext } from "./Components/AuthContext";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </HashRouter>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default App;
