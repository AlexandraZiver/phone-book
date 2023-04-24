import debounce from "lodash.debounce";
import { renderHook, waitFor } from "@testing-library/react";
import useDebouncedState from "../useDebouncedState";

jest.mock("lodash.debounce", () =>
  jest.fn((fn, wait) => {
    const debounced = jest.fn(() => setTimeout(fn, wait));

    debounced.cancel = jest.fn(() => clearTimeout(debounced));

    return debounced;
  }),
);

describe("useDebouncedState", () => {
  test("should debounce state updates", async () => {
    const initialState = "Hello";
    const { result } = renderHook(() => useDebouncedState(initialState, 500));

    expect(result.current).toEqual(initialState);
    expect(debounce).toHaveBeenCalledTimes(1);
  });
});
