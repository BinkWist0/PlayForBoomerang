// Сделаем отдельный класс для отображения игры в консоли.
class View {
  constructor(game){
    this.game = game
    this.score = 0
  }
  render() {
    const yourTeamName = '';

    // Тут всё рисуем.
    console.clear();
    console.log('🔥',this.game.track.join(''));
    console.log('\n\n');
    console.log(`Ваш cчёт:${this.score}`);
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
