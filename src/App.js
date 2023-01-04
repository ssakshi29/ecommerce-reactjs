import Header from "./Component/Header";
import Prdouct from "./Component/PrdouctsList";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Component/Cart";

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems([...items, item]);
    console.log(items);
  };

  const handleRemoveFromCart = (item) => {
    const updatedItem = items.filter((i) => {
      return i.id !== item.id;
    });

    console.log(updatedItem);
    setItems(updatedItem);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Prdouct handleItems={handleItems} />
          </Route>
          <Route path="/cart">
            <Cart
              data-testid="abc"
              items={items}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
