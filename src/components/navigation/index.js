import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "../../pages/main"
import AccountPage from "../../pages/account"

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
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