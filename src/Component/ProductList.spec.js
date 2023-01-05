import ProductsList from "./PrdouctsList";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const fetchProducts = jest.fn();
describe("ProductList Component", () => {
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

  it("matches snapshot", () => {
    const wrapper = render(
      <ProductsList fetchProducts={fetchProducts} products={products} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should call the handleItems function when the add to cart button is clicked", () => {
    const wrapper = render(
      <ProductsList fetchProducts={fetchProducts} products={products} />
    );
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
    const { getAllByTestId } = render(
      <ProductsList fetchProducts={fetchProducts} products={products} />
    );

    expect(getAllByTestId("add-to-cart")).toBeTruthy();
  });
});
