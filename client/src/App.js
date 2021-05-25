import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";

import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

import ContactState from "./context/Contact/ContactState";
import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/Alert/AlertState";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Alerts from "./components/Layouts/Alerts";

import SetAuthToken from "./utils/SetAuthToken";

import PrivateRoute from "./components/Pages/Routing/PrivateRoute";

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              {/* <Navbar /> */}
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
