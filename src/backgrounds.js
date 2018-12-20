const backgrounds = [];

class Background {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
}

function createBackgrounds() {
  for (let i = 1; i <= 35; i++) {
    backgrounds.push(new Background(i, "assets/img/" + i + ".jpg"));
  }
}

createBackgrounds();

export default backgrounds;
