import { render, waitFor, act, fireEvent } from "@testing-library/react";
import ProductsList from "./ProductsList";

describe("Products list layout", () => {
  it("some test", async () => {
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
    const { getByTestId } = render(<ProductsList />);
    await act(() => {
      global.fetch;
    });
    waitFor(() => expect(global.fetch).toBeCalled());
    expect(getByTestId("add-to-cart")).toHaveTextContent("Add to Cart");
  });
  it("should call the handleItems function when the add to cart button is clicked",async () => {
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
    await act(() => {
        global.fetch;
      });
    let addButton = await wrapper.getByTestId("show-details-button");
    // addButton.forEach((button) => {
    expect(addButton).toHaveTextContent("show details");
    fireEvent.click(addButton);
    //expect(handleShowDetails)
    expect(addButton).toHaveTextContent("hide details");
    // });
  });
});
