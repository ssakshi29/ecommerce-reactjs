import Header from "./Component/Header";
import Products from "./Component/PrdouctsList";
import fetch from "isomorphic-fetch";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Component/Cart";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
