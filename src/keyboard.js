// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require("keypress");
const Hero = require("./game-models/Hero")
// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  up: () => console.log('up'),
  down: () => console.log("w"),
  right: () => this.hero.moveRight(),
  left: () => console.log("r"),
  space: () => this.hero.attack(),
};

// Какая-то функция.

function runInteractiveConsole(hero) {
  keypress(process.stdin);
//  console.log(hero);
  process.stdin.on("keypress", (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {

        keyboard[key.name](hero);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === "c") {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

runInteractiveConsole();

module.exports = runInteractiveConsole
