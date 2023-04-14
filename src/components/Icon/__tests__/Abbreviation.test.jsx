import { render, screen } from "@testing-library/react";

import Abbreviation from "../Abbreviation";

describe("Abbreviation testing", () => {
  test("renders the abbreviation correctly", () => {
    render(<Abbreviation firstName="John" lastName="Doe" />);

    const abbreviation = screen.getByText("JD");

    expect(abbreviation).toBeInTheDocument();
    expect(abbreviation).toMatchSnapshot();
  });

  test("render an abbreviation from one word ", () => {
    render(<Abbreviation firstName="John" />);

    const abbreviation = screen.getByText("J");

    expect(abbreviation).toBeInTheDocument();
    expect(abbreviation).toMatchSnapshot();
  });
});
