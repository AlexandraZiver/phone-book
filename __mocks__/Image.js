class Image {
  constructor(src) {
    this.src = src;
    this.width = 0;
    this.height = 0;
    this.onload = null;
    this.onerror = null;
  }

  setSrc(src) {
    this.src = src;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  simulateLoad() {
    if (this.onload) {
      this.onload();
    }
  }

  simulateError() {
    if (this.onerror) {
      this.onerror();
    }
  }
}

global.Image = Image;
