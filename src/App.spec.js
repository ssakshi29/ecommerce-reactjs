import {
  render,
  fireEvent,
  screen,
  waitForElement,
} from "@testing-library/react";
import App from "./App";
import Cart from "./Component/Cart";

jest.mock("./Component/PrdouctsList", () => () => (
  <div>Mocked Product Component</div>
));

jest.mock("./Component/Cart", () => () => <div>Mocked Cart Component</div>);

const handleRemoveFromCart = jest.fn();

describe("App component", () => {
  const items = [
    {
      id: 1,
      title: "iphone",
      description: "An apple mobile which is not sing like apple",
      price: "$549",
      quantity: 1,
    },
  ];

  it("Should Match Snapshot", () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  // it("should call the handleRemoveFromCart function when the remove button is clicked", async () => {
  //   const { getByText } = render(
  //     <App>
  //       <Cart items={items} handleRemoveFromCart={handleRemoveFromCart} />
  //     </App>
  //   );
  // const update = [
  //   {
  //     id: 1,
  //     title: "iphone",
  //     description: "An apple mobile which is not sing like apple",
  //     price: "$549",
  //     quantity: 1,
  //     total: "$549",
  //   },
  //   {
  //     id: 2,
  //     title: "iphone 13",
  //     description: "An apple mobile which is not sing like apple",
  //     price: "$540",
  //     quantity: 1,
  //     total: "$540",
  //   },
  // ];

  // expect()
  // const linkElement = await waitForElement(() =>
  //   getByTestId("cartcomponent")
  // );
  //   fireEvent.click(getByText("handleRemoveFromCart"));

  //   expect(handleRemoveFromCart).toBeCalledOnce();
  //   //  expect(linkElement).toBeInTheDocument();
  // });

  it("should ", async () => {
    const handleItems = jest.fn();
    const { queryByText } = render(<App />);
    fireEvent.(queryByText("Add to Cart"));
    expect(handleItems).toBeCalledOnce();
  });
});
