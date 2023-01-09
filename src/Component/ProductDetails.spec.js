import { render } from "@testing-library/react";
import ProductDetails from "./ProductDetails";


describe("Product Details", () => {
  const product = {
    id: 1,
    description: "An apple mobile which is not sing like apple",
    rating: 4.69,
  };
  it("Should display Rating and Description", () => {
    const wrapper = render(<ProductDetails product={product} />);
    expect(wrapper).toMatchSnapshot();
  });
});
