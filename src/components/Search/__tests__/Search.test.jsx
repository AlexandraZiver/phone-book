import { fireEvent, render, screen } from "@testing-library/react";

import Search from "../index";

import { Input } from "semantic-ui-react";

jest.mock("semantic-ui-react", () => {
  return {
    Input: jest
      .fn()
      .mockImplementation(({ value, onChange }) => (
        <input
          type="text"
          value={value || ""}
          name="searchInput"
          onChange={onChange || jest.fn()}
          icon="search"
          placeholder="Search..."></input>
      )),
  };
});
describe("testing Search ", () => {
  test("testing by onChange of search", () => {
    const handleChange = jest.fn();

    const { getByRole } = render(<Search value="Hello" onChange={handleChange} />);

    fireEvent.change(getByRole("textbox"), { target: { value: "hi" } });

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(handleChange).toBeCalled();
    expect(getByRole("textbox")).toMatchSnapshot();
  });

  test("testing by placeholder of search", () => {
    const { getByPlaceholderText } = render(<Search />);

    expect(getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(getByPlaceholderText("Search...")).toMatchSnapshot();
  });

  test("testing by value of search", () => {
    const { getByDisplayValue } = render(<Search value="Hello" />);

    expect(getByDisplayValue("Hello")).toBeInTheDocument();
    expect(getByDisplayValue("Hello")).toMatchSnapshot();
  });
});
