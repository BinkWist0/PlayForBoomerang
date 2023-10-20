// Сделаем отдельный класс для отображения игры в консоли.
class View {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.live = 5;
  }

  render() {
    const yourTeamName = '';
    const array = Array.from({ length: this.live }, (item) => item = '❤️');
    const earth = this.game.track.map((item) => item = '🟩').join('');
    const strLive = array.join('');
    // Тут всё рисуем.
    console.clear();
    console.log('🔥', this.game.track.join(''));
    console.log(earth);
    console.log('\n\n');
    console.log(`Ваш cчёт:${this.score}`);
    console.log(`LIVE:${strLive}`);
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
