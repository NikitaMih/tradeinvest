import React from "react";
import { useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "../pages/main/mainIndex"
import AccountPage from "../pages/account/accountIndex"
import RegistrationPage from "../pages/registration/registrationIndex"

export default function Navigation() {

  const login = useSelector((state) => state.login.login);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
          <Route path="/account">
            {login ? <AccountPage /> : <Route path="/"><MainPage /></Route>}
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};