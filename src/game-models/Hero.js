// Наш герой.

const Boomerang = require("./Boomerang");

class Hero {
  constructor({ position, boomerang }) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang(this.position);
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.position = this.position;
    this.boomerang.fly();
  }

  die(str) {
    this.skin = '💀';
    console.log(`YOU ARE ${str}!💀`);
    process.exit();
  }
}

module.exports = Hero;
