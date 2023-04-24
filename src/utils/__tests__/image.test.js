import checkImageUrl from "../image";

describe("checkImageUrl", () => {
  let originalImage;

  beforeAll(() => {
    originalImage = global.Image;
    global.Image = class MockImage {
      constructor() {
        this.onload = null;
        this.onerror = null;
      }

      set src(url) {
        setTimeout(() => {
          if (url.includes(".jpg") || url.includes(".png")) {
            this.onload();
          } else {
            this.onerror();
          }
        }, 0);
      }
    };
  });

  afterAll(() => {
    global.Image = originalImage;
  });

  test("returns true for valid image url", async () => {
    const url = "https://example.com/image.jpg";
    const result = await checkImageUrl(url);

    expect(result).toBe(true);
  });

  test("returns false for invalid image url", async () => {
    const url = "https://example.com/nonexistent-image";
    const result = await checkImageUrl(url);

    expect(result).toBe(false);
  });
});
