const backgrounds = [];

class Background {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
}

function createBackgrounds() {
  for (let i = 1; i <= 19; i++) {
    backgrounds.push(new Background(i, "assets/img/" + i + ".jpg"));
  }
}

document.addEventListener("DOMContentLoaded", createBackgrounds());

export default backgrounds;
