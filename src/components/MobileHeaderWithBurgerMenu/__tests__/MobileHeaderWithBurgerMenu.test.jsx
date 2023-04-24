import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MobileHeaderWithBurgerMenu from "../index";
import { Icon } from "semantic-ui-react";

jest.mock("semantic-ui-react", () => {
  return {
    Icon: jest.fn().mockImplementation(({ isOpen }) => {
      return <img name={isOpen ? "close" : "bars"}></img>;
    }),
  };
});

describe("MobileHeaderWithBurgerMenu component", () => {
  test("renders title prop correctly", () => {
    const title = "List";
    const { getByText } = render(<MobileHeaderWithBurgerMenu title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });

  test("calls onOpen prop correctly on button click", () => {
    let isOpen = true;
    const onOpen = jest.fn(() => {
      const newOpen = isOpen;
      isOpen = !isOpen;
      return !newOpen;
    });

    const { getByRole, rerender } = render(
      <MobileHeaderWithBurgerMenu onOpen={onOpen} isOpen={isOpen} />,
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onOpen).toHaveBeenCalledWith(false);
    rerender(<MobileHeaderWithBurgerMenu onOpen={onOpen} isOpen={isOpen} />);

    fireEvent.click(button);

    expect(onOpen).toHaveBeenCalledTimes(2);
    expect(onOpen).toHaveBeenCalledWith(true);
  });

  test("calls onOpen prop correctly on escape keydown event", () => {
    let isOpen = true;
    const onOpen = jest.fn(() => !isOpen);

    const { container } = render(<MobileHeaderWithBurgerMenu isOpen={true} onOpen={onOpen} />);

    fireEvent.keyDown(container, { key: "Escape", code: "Escape" });

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onOpen).toHaveBeenCalledWith(false);
  });
});
