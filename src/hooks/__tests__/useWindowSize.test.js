import useWindowWidth from "../useWindowSize";
import { renderHook } from "@testing-library/react";

describe("useWindowWidth", () => {
  test("should return current window width and height", () => {
    const { result } = renderHook(() => useWindowWidth());
    expect(result.current).toHaveLength(2);
    expect(result.current[0]).toBe(window.innerWidth);
    expect(result.current[1]).toBe(window.innerHeight);
  });
});
