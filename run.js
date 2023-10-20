// Основной файл.
// Запускает игру.
// Good game
const Game = require('./src/Game');
const runInteractiveConsole = require("./src/keyboard")
const { UserInfo } = require('./models')
// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});


// Запуск игры.
game.play();
runInteractiveConsole(game);

// Запись результата в БД.
async function createData(){

await UserInfo.create({
  login:
  score:  
})
}

module.exports = game