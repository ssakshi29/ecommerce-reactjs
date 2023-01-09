import ProductsList from "./PrdouctsList";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

// const fetchProducts = jest.fn();
describe("ProductList Component", () => {
  // global.fetch=jest.fn();
  // const promise = Promise.resolve({
  //   json: () => {
  //     return products;
  //   },
  //   ok: true,
  // });

  global.fetch = jest.fn(() => {
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
    return {
      json: () => {
        return products;
      },
      ok: true,
    };
  });

  it("matches snapshot", () => {
    const wrapper = render(<ProductsList />);

    expect(global.fetch).toBeCalled();
    // expect(wrapper).toMatchSnapshot();
  });

  it("should call the handleItems function when the add to cart button is clicked", () => {
    const wrapper = render(<ProductsList />);
    const addButton = wrapper.getAllByTestId("show-details-button");
    // addButton.forEach((button) => {
    expect(addButton[0]).toHaveTextContent("show details");
    fireEvent.click(addButton[0]);
    //expect(handleShowDetails)
    expect(addButton[0]).toHaveTextContent("hide details");
    // });
  });

  it("should render the add-to-cart button", () => {
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
    const { getAllByTestId } = render(<ProductsList />);

    expect(getAllByTestId("add-to-cart")).toBeTruthy();
  });
});
