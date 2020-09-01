// Import required libraries from node_modules
import React from "react";
import { Route, Redirect, Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

// Import route related app components
import Login from "../login/Login.component";
import Header from "../header/Header.componet";
import Ordering from "../ordering-screen/Order.component";
import OrderHistory from "../order-history/OrderHistory.component";

// Import route related app components
import "./App.component.css";

// To assign route history
export const history = createBrowserHistory();

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  userValidation() {
    if (sessionStorage.getItem("userName")) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Router history={history}>
        <div className="app-bgImage">
          <Route
            exact
            path={["/", "/login"]}
            render={() =>
              this.userValidation() ? <Redirect to="/order" /> : <Login />
            }
          />
          <Route
            render={props =>
              (props.location.pathname !== "/login" ||
                props.location.pathname !== "/") &&
              (this.userValidation() ? <Header /> : <Redirect to="/login" />)
            }
          />
          <Route
            exact
            path="/order"
            render={() =>
              this.userValidation() ? <Ordering /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/order/history"
            render={() =>
              this.userValidation() ? (
                <OrderHistory />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
