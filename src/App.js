import Header from "./Component/Header";
import Products from "./Component/PrdouctsList";
import fetch from "isomorphic-fetch";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Component/Cart";

export const UserContext = React.createContext({
  handleItems: (item) => {},
  handleRemoveFromCart: (item) => {},
});

function App() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  const handleItems = (item) => {
    setItems([...items, item]);
    // console.log(items);
  };

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
    // console.log("qwe");
  };

  const handleRemoveFromCart = (item) => {
    const updatedItem = items.filter((i) => {
      return i.id !== item.id;
    });
    setItems(updatedItem);
  };

  return (
    <UserContext.Provider
      value={{
        handleItems: handleItems,
        handleRemoveFromCart: handleRemoveFromCart,
      }}
    >
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Products
                fetchProducts={fetchProducts}
                products={products}
                handleItems={handleItems}
              />
            </Route>
            <Route path="/cart">
              <Cart
                items={items}
                // handleRemoveFromCart={handleRemoveFromCart}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
