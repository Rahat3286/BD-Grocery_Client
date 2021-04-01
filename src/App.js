import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <div className="container">
        {/* <h1 className="text-center">ema-john-with-auth</h1> */}
        {/* <h3 className="text-center">Name: {loggedInUser.name}</h3> */}
      </div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          {/* <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute> */}
          <Route path="/order">
            <Order/>
          </Route>
          {/* <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute> */}
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <PrivateRoute path="/checkout">
            <Checkout/>
          </PrivateRoute> */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;