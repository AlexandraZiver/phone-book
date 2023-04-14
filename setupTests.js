import { JSDOM } from "jsdom";

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

global.TextEncoder = require("util").TextEncoder; // Добавляем полифилл для TextEncoder

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};

class Image {
  constructor() {
    this.onload = null;
    this.onerror = null;
    this.src = "";
  }
}

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

global.Image = Image;
