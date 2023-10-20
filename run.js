// Основной файл.
// Запускает игру.
// Good game
const readline = require("readline");
const Game = require('./src/Game');
const runInteractiveConsole = require("./src/keyboard")
// Инициализация игры с настройками.


const game = new Game({
  trackLength: 30,
});

function getName() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });

    console.log("Привет, как тебя зовут?");

    rl.prompt();
    rl.on("line", (input) => {
      const name = input.trim();
      if (name) {
        rl.pause();
        resolve(name);
      }
    })
  })
}
getName().then(() => process.stdin.resume() ).then(() => game.play()).then(() => runInteractiveConsole(game))
module.exports = game