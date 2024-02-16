// Враг.

class Enemy {
  constructor({ position = 5 } = {}) {
    this.generateSkin();
    this.generatePosition();
    this.position = this.generatePosition();
  }

  generateSkin() {
    const skins = [
      "👾",
      "💀",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }
  generatePosition() {
    const rand = Math.floor(Math.random() * 24);
    if (rand > 5) {
      return rand;
    } else {
      return 5;
    }
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = null;
    console.log("Enemy is dead!");
  }
}

module.exports = Enemy;
