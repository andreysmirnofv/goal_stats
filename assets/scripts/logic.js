const fs = require("fs");
const path = require("path");
const { checkAndSendCallBack } = require("../keyboard/keyboard");
const jsonFilePath = path.join(__dirname, "../db/db.json");

function sendData(bot, msg, country){
  const readFile = fs.readFileSync(jsonFilePath, 'utf8')
  const parsedData = JSON.parse(readFile)

  bot.sendMessage(msg.chat.id, `country: ${parsedData[0].country}\n goals: ${parsedData[0]}\ncountry: ${parsedData[1].country}\n goals: ${parsedData[1]}`)
    
}
sendData()

module.exports = {

};
