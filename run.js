// Основной файл.
// Запускает игру.
// Good game
const Game = require('./src/Game');
const runInteractiveConsole = require("./src/keyboard")
// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});


// Запуск игры.
game.play();
runInteractiveConsole(game);
module.exports = game