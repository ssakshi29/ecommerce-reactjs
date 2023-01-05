import Cart from "./Cart";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { UserContext } from "../App";

const handleRemoveFromCart = jest.fn();

describe("Cart Component", () => {
  const items = [
    {
      id: 1,
      title: "iphone",
      description: "An apple mobile which is not sing like apple",
      price: "$549",
      quantity: 1,
      total: "$549",
    },
  ];
  it("Should Match Snapshot", () => {
    const wrapper = render(
      <Cart items={items} handleRemoveFromCart={handleRemoveFromCart} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should call the handleRemoveFromCart function when the remove button is clicked", () => {
    const handleRemoveFromCart = jest.fn();
    const items = [{ id: 1, title: "Item 1", price: 10, quantity: 1 }];
    const { getByText } = render(
      <UserContext.Provider value={{ handleRemoveFromCart }}>
        <Cart items={items} />
      </UserContext.Provider>
    );
    fireEvent.click(getByText("Remove"));
    expect(getByText("Remove")).toBeInTheDocument();
    expect(handleRemoveFromCart).toHaveBeenCalledWith({
      id: 1,
      title: "Item 1",
      price: 10,
      quantity: 1,
      total: 10,
    });
  });
});
