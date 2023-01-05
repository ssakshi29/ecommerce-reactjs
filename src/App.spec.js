import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import Products from "./Component/PrdouctsList";
import React from "react";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    rating: 4.69,
    brand: "Apple",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
];

describe("App component", () => {
  it("Should Match Snapshot", () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleItems and display data in the Product component", async () => {
    const handleItems = jest.fn();
    const { findAllByTestId } = render(
      <App>
        <Products handleItems={handleItems} products={products} />
      </App>
    );
    const addToCartButtons = await waitForElement(() =>
      findAllByTestId("add-to-cart")
    );

    if (addToCartButtons.length > 0) {
      console.log("sd" + addToCartButtons.length);
      fireEvent.click(addToCartButtons[0]);
      expect(addToCartButtons).toHaveLength(30);
    }
  });
});
