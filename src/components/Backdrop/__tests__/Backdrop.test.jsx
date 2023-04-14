import { screen, render } from "@testing-library/react";
import Backdrop from "../Backdrop";

describe("Backdrop render testing", () => {
  const { container } = render(
    <Backdrop>
      <div>Hello</div>
    </Backdrop>,
  );

  const backdropElement = container.querySelector(".Container");
  const childrenElement = screen.getByText("Hello");

  test("testing Backdrop and ChildrenElement", () => {
    expect(backdropElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
    expect(backdropElement).toHaveStyle({ fontSize: "18px;" });
    expect(backdropElement).toMatchSnapshot();
  });
});
