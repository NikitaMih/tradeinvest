import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "../pages/main"
import AccountPage from "../pages/account"
import RegistrationPage from "../pages/registration"

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}