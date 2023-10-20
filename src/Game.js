// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0, boomerang: this.boomerang }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: trackLength });
    this.view = new View(this);
    this.boomerang = new Boomerang(trackLength);
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
    this.enemy.moveLeft();
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      
      this.hero.die('DEAD');
    }
    if (this.hero.position < 0){
      this.hero.die('FIRE')
    }
    if (this.hero.boomerang.position === this.enemy.position || this.hero.boomerang.position === this.enemy.position + 1 || this.hero.boomerang.position === this.enemy.position - 1) {
      this.enemy.die();
      this.enemy = new Enemy({position: this.trackLength})
      this.view.score += 10
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 50);
  }
}

module.exports = Game;
