import { render } from "@testing-library/react";
import LoadingAndError from "../LoadingAndError";
import Status from "../../../constants/status";
import { Size } from "../../../constants/size";

jest.mock("semantic-ui-react", () => ({
  Loader: jest.fn().mockImplementation(() => <div>Loader</div>),
  Dimmer: jest.fn().mockImplementation(() => <div>Loading...</div>),
}));

describe("LoadingAndError testing", () => {
  test(" renders LoadingAndError and  children", () => {
    const { getByTestId } = render(
      <LoadingAndError>
        <div data-testid="childComponent">Child component</div>
      </LoadingAndError>,
    );

    expect(getByTestId("childComponent")).toBeInTheDocument();
    expect(getByTestId("childComponent")).toMatchSnapshot();
  });

  test("renders LoadingAndError when status is PENDING and size BIG ", () => {
    const { container } = render(
      <LoadingAndError status={Status.PENDING} size={Size.Big} includeText={true} />,
    );

    const loadingElement = container.querySelector(".LoadingContainer", ".LoadingContainerBig");

    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveTextContent("Loading...");
    expect(loadingElement).toMatchSnapshot();
  });

  test("renders LoadingAndError when status is REJECTED and size BIG ", () => {
    const { container } = render(
      <LoadingAndError size={Size.BIG} status={Status.REJECTED} error="error" />,
    );

    const errorElement = container.querySelector(".ContainerErrorBig", ".ContainerError");

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("error");
    expect(errorElement).toMatchSnapshot();
  });

  test(" renders LoadingAndError when status REJECTED and size SMALL", () => {
    const { container } = render(<LoadingAndError status={Status.REJECTED} />);

    expect(container.querySelector(".ContainerError")).toBeInTheDocument();
    expect(container.querySelector(".ContainerError")).toMatchSnapshot();
  });

  test(" renders LoadingAndError when status PENDING and size SMALL", () => {
    const { container } = render(<LoadingAndError status={Status.PENDING} size={Size.SMALL} />);

    expect(container.querySelector(".LoadingContainer")).toBeInTheDocument();
    expect(container.querySelector(".LoadingContainer")).toMatchSnapshot();
  });

  test(" renders LoadingAndError when incorrect props", () => {
    const { getByTestId } = render(
      <LoadingAndError size="Large" error="error" includeText={true}>
        <div data-testid="childComponent">Child component</div>
      </LoadingAndError>,
    );

    expect(getByTestId("childComponent")).toBeInTheDocument();
    expect(getByTestId("childComponent")).not.toHaveClass();
    expect(getByTestId("childComponent")).toMatchSnapshot();
  });
});
