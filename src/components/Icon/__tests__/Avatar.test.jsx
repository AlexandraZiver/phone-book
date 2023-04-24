import { render } from "@testing-library/react";

import Avatar from "../Avatar";

describe("testing Avatar", () => {
  test("renders valid avatar", () => {
    const { container } = render(
      <Avatar
        lastName="Doe"
        firstName="John"
        avatar="https://example.com/avatar.jpg"
        size="small"
        fallbackBackgroundColor="#ccc"
      />,
    );

    const avatarElement = container.querySelector(".Avatar");
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveStyle({ backgroundImage: "url(https://example.com/avatar.jpg)" });
  });

  test("renders invalid avatar", () => {
    const { container } = render(<Avatar lastName="Doe" firstName="John" size="small" />);

    const avatarElement = container.querySelector(".Avatar");

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toMatchSnapshot;
    expect(avatarElement).toHaveStyle({
      backgroundColor: "rgba(136, 156, 209, 0.859);",
      width: "50px;",
      height: "50px;",
    });
  });

  test("renders invalid avatar with  fallbackBackgroundColor", () => {
    const { container } = render(
      <Avatar lastName="Doe" firstName="John" fallbackBackgroundColor="#ccc" />,
    );

    const avatarElement = container.querySelector(".Avatar");

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveStyle({
      backgroundColor: "#ccc;",
    });
  });
});
