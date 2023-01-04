import Cart from "./Cart";
import { render, fireEvent, screen, shallow } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

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
    const items = [{ id: 1, title: "Item 1", price: 10, quantity: 1 }];
    const { getByText } = render(
      <Cart items={items} handleRemoveFromCart={handleRemoveFromCart} />
    );
    fireEvent.click(getByText("Remove"));
    expect(handleRemoveFromCart).toHaveBeenCalledWith({
      id: 1,
      title: "Item 1",
      price: 10,
      quantity: 1,
      total: 10,
    });
  });
});
