import { screen, render } from "@testing-library/react";
import ClientDetails from "../index";
import { useParams } from "react-router-dom";
import { clientsApi } from "../../../store/api/clients";
jest.mock("../../../store/api/clients", () => ({
  clientsApi: {
    useFetchClientByIdQuery: jest.fn(),
  },
}));

jest.mock("semantic-ui-react", () => {
  const React = require("react");
  return {
    List: jest.fn().mockImplementation(() => <div></div>),
  };
});
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

describe("ClientDetails component", () => {
  beforeEach(() => {
    useParams.mockClear();
  });
  it("should render client details", () => {
    const mockClient = {
      general: {
        firstName: "John",
        lastName: "Doe",
        avatar: "https://example.com/avatar.jpg",
      },
      job: {
        title: "Software Engineer",
        company: "Example Inc.",
      },
      contact: {
        email: "john.doe@example.com",
        phone: "555-1234",
      },
      address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345",
        country: "USA",
      },
      id: 0,
    };

    clientsApi.useFetchClientByIdQuery.mockReturnValue({
      data: mockClient,
      error: null,
      status: "fulfilled",
    });

    useParams.mockReturnValue({ id: "0" });

    const { container, getByText } = render(<ClientDetails />);
    const ClientDetailsElement = container.querySelector(".WrapperClientDetails");
    expect(ClientDetailsElement).toBeInTheDocument();
    expect(ClientDetailsElement).toMatchSnapshot();
  });
});
