import React from "react";
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import ShopHeader from "./components/ShopHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopHeader />
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
