require('dotenv').config({ path: './assets/modules/.env' });
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.devStatus ? process.env.TOKEN_TEST : process.env.DEFAULT_TOKEN, { polling: true });
const fs = require('fs')
const {sendCountries} = require('./assets/keyboard/keyboard.js')
const commands = fs.readFileSync('./assets/db/commands/commands.json', 'utf-8')
const db = require("./assets/db/country/country.json")

function addCountryAndLeague(msg) {
  const text = msg.text;

  // Проверяем, если есть название страны
  if (!country) {
    country = text;
  } else {
    league = text;

    // Добавляем новую запись в массив
    db.push({league, country });

    // Записываем обновленный массив в JSON-файл
    fs.writeFileSync('./assets/db/db.json', JSON.stringify(db, null, "\t"));

    bot.sendMessage(msg.chat.id, "Страна и лига добавлены.");
    bot.removeListener("message", addCountryAndLeague);
  }
}

function getCountryAndLeague(msg) {
  const text = msg.text;
  country = text;
  bot.sendMessage(msg.chat.id, "введите название лиги")
  bot.on("message", addCountryAndLeague);
  bot.removeListener("message", getCountryAndLeague);
}
bot.setMyCommands(commands)

bot.on('message', async(msg) => {
  if (msg.text === '/start') {
    sendCountries(bot, msg);
    bot.sendMessage(msg.chat.id, "введите название страны")
    bot.on("message", getCountryAndLeague)
  }else if (msg.text === '/get'){
    sendCountryData(bot, msg.chat.id)
  }else if (msg.text !== "/start" && msg.text !== "/get"){
  }
});

// bot.on('callback_query', async (callbackQuery) => {
//   if (callbackQuery.data){
//   } else {
//     console.error("Некорректные данные в callbackQuery");
//   }
// })
bot.on('polling_error', console.log);
