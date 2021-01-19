import React from "react";
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import TeslaAccount from "./components/TeslaAccount";
import Semi from "./components/Semi";
import ColorWhiteHeader from "./components/ColorWhiteHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <HomePage />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/teslacloneaccount" exact>
            <TeslaAccount />
          </Route>
          <Route path="/semi" exact>
            <ColorWhiteHeader />
            <Semi />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
