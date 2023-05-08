/* eslint-disable no-unused-expressions */
import { render, act, fireEvent } from "@testing-library/react";
import ProductsList from "./ProductsList";

describe("Products list layout", () => {
  it("should call the handleItems function when the add to cart button is clicked", async () => {
    const promise = Promise.resolve({
      json: () =>
        Promise.resolve({
          products: [
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
          ],
        }),
      ok: true,
    });
    global.fetch = jest.fn(() => promise);
    const { findByTestId } = render(<ProductsList />);
    act(() => {
      global.fetch;
    });
    const addButton = await findByTestId("add-to-cart");
    fireEvent.click(addButton);
    expect(await findByTestId("add-to-cart")).toHaveTextContent("Add to Cart");
  });

  it("should call the handleShowDetails function when the showhide button is clicked", async () => {
    const promise = Promise.resolve({
      json: () =>
        Promise.resolve({
          products: [
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
          ],
        }),
      ok: true,
    });
    global.fetch = jest.fn(() => promise);
    const wrapper = render(<ProductsList />);
    act(() => {
      global.fetch;
    });
    let showButton = await wrapper.findByTestId("show-details-button");
    expect(showButton).toHaveTextContent("show details");
    fireEvent.click(showButton);
    expect(showButton).toHaveTextContent("hide details");
  });
});
