// Основной файл.
// Запускает игру.
// Good game
const readline = require("readline");
const Game = require('./src/Game');
const runInteractiveConsole = require("./src/keyboard")
const { UserScore } = require("./models");

// Инициализация игры с настройками.


const game = new Game({
  trackLength: 30,
});

async function addData() {
  await UserScore.create({
    name: game.hero.name,
    score: game.view.score,
  });
  console.log("Записано!");
}

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
      return name;
    })
  })
}
 getName().then((data) => game.hero.name = data);
getName().then(() => process.stdin.resume() ).then(() => game.play()).then(() => runInteractiveConsole(game))
module.exports = addData;