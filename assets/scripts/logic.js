const fs = require("fs");
const path = require("path");
const { checkAndSendCallBack } = require("../keyboard/keyboard");
const jsonFilePath = path.join(__dirname, "../db/db.json");

function sendData(bot, msg, country){
  const readFile = fs.readFileSync(jsonFilePath, 'utf8')
  const parsedData = JSON.parse(readFile)
  console.log(parsedData)
  console.log(parsedData[0].country)

  bot.sendMessage(msg.chat.id, ``)
    
}
sendData()

module.exports = {

};
