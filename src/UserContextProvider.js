import React, { useState } from "react";
import { UserContext } from "./UserContext";

export function UserContextProvider(props) {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems([...items, item]);
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
        items: items,
        handleItems: handleItems,
        handleRemoveFromCart: handleRemoveFromCart,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
