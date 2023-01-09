import ReactDOM from "react-dom";
import { ReactStrictMode } from "./index";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("index.js", () => {
  it("renders without crashing", () => {
    ReactDOM.render(ReactStrictMode);
    expect(ReactDOM.render).toHaveBeenCalledWith(ReactStrictMode);
  });
});
