import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Layouts/Navbar";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

import ContactState from "./context/Contact/ContactState";
import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/Alert/AlertState";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Alerts from "./components/Layouts/Alerts";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
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
