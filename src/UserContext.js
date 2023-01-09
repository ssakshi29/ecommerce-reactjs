import React from "react";

export const UserContext = React.createContext({
  items: null,
  handleItems: (item) => {},
  handleRemoveFromCart: (item) => {},
});
