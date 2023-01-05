import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import Products from "./Component/PrdouctsList";
import React from "react";
import Cart from "./Component/Cart";
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

// jest.mock("fetch", () =>
//   jest.fn(() =>
//     Promise.resolve({ json: () => Promise.resolve({ products: products }) })
//   )
// );

// fetch.mockImplementation(() =>
//   Promise.resolve({ json: () => Promise.resolve({ products: products }) })
// );
describe("App component", () => {
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

  // it("should call handleRemoveFromCart", async () => {
  //   const handleRemoveFromCart = jest.fn();
  //   const handleItems = jest.fn();
  //   const fetchProducts = jest.fn();
  //   const { getAllByText, debug, findAllByText } = render(
  //     <App>
  //       <Products
  //         products={products}
  //         handleItems={handleItems}
  //         fetchProducts={fetchProducts}
  //       />
  //       <Cart items={items} handleRemoveFromCart={handleRemoveFromCart} />
  //     </App>
  //   );

  //   const removeButtons = await waitForElement(() => findAllByText("Remove"));
  //   debug();
  //   console.log("bnas" + removeButtons);
  //   if (removeButtons.length > 0) {
  //     console.log("cxz" + removeButtons.length);
  //     fireEvent.click(removeButtons[0]);
  //     expect(removeButtons[0]).toHaveBeenCalledWith({
  //       id: 1,
  //       title: "Item 1",
  //       price: 10,
  //       quantity: 1,
  //       total: 10,
  //     });
  //     expect(removeButtons).toHaveLength(30);
  //   }
  // });
});
