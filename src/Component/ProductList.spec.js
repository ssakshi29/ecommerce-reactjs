import ProductsList from "./PrdouctsList";
import {
  render,
  fireEvent,
  screen,
  waitForElement,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { waitFor } from "@testing-library/dom";

Enzyme.configure({ adapter: new Adapter() });

let handleItems = jest.fn();

describe("ProductList Component", () => {
  it("matches snapshot", () => {
    const wrapper = render(<ProductsList handleItems={handleItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call the handleItems function when the add to cart button is clicked", async () => {
    const { getAllByTestId } = render(
      <ProductsList handleItems={handleItems} />
    );
    const addButton = await waitForElement(() => getAllByTestId("add-to-cart"));
    addButton.forEach((button) => {
      fireEvent.click(button);
      expect(handleItems).toHaveBeenCalled();
    });
  });

  // it("should call the handleShowDetails function when the show button is clicked", async () => {
  //   const { getAllByTestId } = render(
  //     <ProductsList handleItems={handleItems} />
  //   );
  //   const showButton = await waitForElement(() =>
  //     getAllByTestId("show-details-button")
  //   );
  //   showButton.forEach((button) => {
  //     fireEvent.click(button);
  //     const handleShow = handleShowDetails();
  //     // expect(handleShowDetails).toHaveBeenCalled();
  //     expect(handleShow).toBe(1);
  //     //handleShowDetails.mockClear();
  //   });
  // });

  // it("should call the handleShowDetails function when the show button is clicked", () => {
  //   const wrapper = shallow(<ProductsList handleItems={handleItems} />);
  //   // const element = wrapper.find("Button");
  //   // console.log(element.debug());
  //   // element.simulate("click");
  //   // console.log(element.length);
  //   // const element1 = wrapper.find("ProductList");

  //   expect(element1.length).toBe(0);
  // });

  it("should ", async () => {
    const handleShowDetails = jest.fn();
    const { getAllByTestId } = render(
      <ProductsList handleItems={handleItems} />
    );
    const showButton = await waitForElement(() =>
      getAllByTestId("show-details-button")
    );
    showButton.forEach((button) => {
      fireEvent.click(button);
      expect(handleShowDetails).toHaveBeenCalledWith(0);
    });
  });
});
