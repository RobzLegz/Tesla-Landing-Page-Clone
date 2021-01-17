import React from "react";
import './App.css';
import Header from "./components/Header";
import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {

  return (
    <div className="App">
      <Header />
      <Switch location={useLocation} key={useLocation.pathname}>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
