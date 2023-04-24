import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import CustomInfiniteScroll from "../CustomInfiniteScroll";

jest.mock("react-infinite-scroll-component", () => {
  return {
    InfiniteScroll: jest.fn(({ dataArray, setData, limit }) => {
      return (
        <div data-testid="infiniteScroll" next={setData} scrollableTargetId="nameScroll">
          <div>No More Data</div>
        </div>
      );
    }),
  }.InfiniteScroll;
});

const dataArray = [1, 2, 3, 4];
const setData = jest.fn().mockReturnValue([1, 2, 3, 4]);

describe("CustomInfiniteScroll", () => {
  test("should display 'No More Data' message after loading all data", async () => {
    render(
      <>
        <CustomInfiniteScroll dataArray={dataArray} setData={setData} limit={3} />
      </>,
    );
    await waitFor(() =>
      screen.getByText((content, element) => {
        return content.startsWith("No More Data");
      }),
    );

    const infiniteScroll = screen.getByTestId("infiniteScroll");

    expect(infiniteScroll).toBeInTheDocument();

    fireEvent.scroll(infiniteScroll);

    expect(setData).toBeCalledTimes(2);
  });
});
