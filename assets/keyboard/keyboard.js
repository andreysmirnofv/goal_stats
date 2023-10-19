const { query } = require("express");

function sendCountries(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Africa", callback_data: "Africa" }],
        [{ text: "Albania", callback_data: "Albania" }],
        [{ text: "Algeria", callback_data: "Algeria" }],
        [{ text: "American Samoa", callback_data: "American Samoa" }],
        [{ text: "Andorra", callback_data: "Andorra" }],
        [{ text: "Angola", callback_data: "Angola" }],
        [{ text: "Solomon Islands", callback_data: "Solomon Islands" }],
        [{ text: "South Africa", callback_data: "South Africa" }],
        [{ text: "South America", callback_data: "South America" }],
        [{ text: "South Korea", callback_data: "South Korea" }],
        [{ text: "Spain", callback_data: "Spain" }],
        [{ text: "Spain Amateur", callback_data: "Spain Amateur" }],
        [{ text: "Suriname", callback_data: "Suriname" }],
        [{ text: "Swaziland", callback_data: "Swaziland" }],
        [{ text: "Sweden", callback_data: "Sweden" }],
        [{ text: "Sweden Amateur", callback_data: "Sweden Amateur" }],
        [{ text: "Switzerland", callback_data: "Switzerland" }],
        [{ text: "Switzerland Amateur", callback_data: "Switzerland Amateur" }],
        [{ text: "Syria", callback_data: "Syria" }],
        [{ text: "Tajikistan", callback_data: "Tajikistan" }],
        [{ text: "Tanzania", callback_data: "Tanzania" }],
        [{ text: "Thailand", callback_data: "Thailand" }],
        [{ text: "Timor Leste", callback_data: "Timor Leste" }],
        [{ text: "Trinidad and Tobago", callback_data: "Trinidad and Tobago" }],
        [{ text: "Tunisia", callback_data: "Tunisia" }],
        [{ text: "Türkiye", callback_data: "Türkiye" }],
        [{ text: "Turkmenistan", callback_data: "Turkmenistan" }],
        [{ text: "Uganda", callback_data: "Uganda" }],
        [{ text: "Ukraine", callback_data: "Ukraine" }],
        [{ text: "Ukraine Amateur", callback_data: "Ukraine Amateur" }],
        [
          {
            text: "United Arab Emirates",
            callback_data: "United Arab Emirates",
          },
        ],
        [{ text: "Uruguay", callback_data: "Uruguay" }],
        [{ text: "Uruguay Amateur", callback_data: "Uruguay Amateur" }],
        [{ text: "USA", callback_data: "USA" }],
        [{ text: "USA Amateur", callback_data: "USA Amateur" }],
        [{ text: "Uzbekistan", callback_data: "Uzbekistan" }],
        [{ text: "Vanuatu", callback_data: "Vanuatu" }],
        [{ text: "Venezuela", callback_data: "Venezuela" }],
        [{ text: "Vietnam", callback_data: "Vietnam" }],
        [{ text: "Wales", callback_data: "Wales" }],
        [{ text: "Zambia", callback_data: "Zambia" }],
        [{ text: "Zanzibar", callback_data: "Zanzibar" }],
        [{ text: "Zimbabwe", callback_data: "Zimbabwe" }],
      ],
    },
  };
  bot.sendMessage(msg.chat.id, "Выберите страну:", keyboard);
}

function sendAfricaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "jdwnewjnk", callback_data: "1" }],
        [{ text: "klmermfk", callback_data: "2" }],
        [{ text: "fej", callback_data: "3" }],
        [{ text: "lfjewk", callback_data: "4" }],
        [{ text: "fje3", callback_data: "5" }],
      ],
    },
  };
  bot.sendMessage(msg.chat.id, "Лиги страны на выбор", keyboard)
}

function sendAlbaniaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendAmericanSamoaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}

function sendAndorraLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendAngolaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSolomonIslandsLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSouthAfricaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSouthAmericaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSouthKoreaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSpainLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSpainAmateurLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSurinameLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSwazilandLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSwedenLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSwedenAmateurLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSwitzerlandLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSwitzerlandAmateurLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendSyriaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendTajikistanLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendTanzaniaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendThailandLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendTimorLesteLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendTrinidadAndTobagoLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendTunisiaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendTürkiyeLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendTurkmenistanLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUgandaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUkraineLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUkraineAmateurLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUnitedArabEmiratesLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUruguayLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUruguayAmateurLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUsaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUsaAmateurLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendUzbekistanLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendVanuatuLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendVenezuelaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendVietnamLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendWalesLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendZambiaLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendZanzibarLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}
function sendZimbabweLeagues(bot, msg) {
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
        [{ text: "", callback_data: "" }],
      ],
    },
  };
}

function checkAndSendCallBack(bot, query) {
  const callbackData = query.data;

  // Вызывайте соответствующую функцию в зависимости от callback_data
  switch (callbackData) {
    case "Africa":
      sendAfricaLeagues(bot, query.message);
      break;
    case "Albania":
      sendAlbaniaLeagues(bot, query.message);
      break;
    case "Algeria":
      sendAlgeriaLeagues(bot, query.message);
      break;
    case "American Samoa":
      sendAmericanSamoaLeagues(bot, query.message);
      break;
    case "Andorra":
      sendAndorraLeagues(bot, query.message);
      break;
    case "Angola":
      sendAngolaLeagues(bot, query.message);
      break;
    case "Solomon Islands":
      sendSolomonIslandsLeagues(bot, query.message);
      break;
    case "South Africa":
      sendSouthAfricaLeagues(bot, query.message);
      break;
    case "South America":
      sendSouthAmericaLeagues(bot, query.message);
      break;
    case "South Korea":
      sendSouthKoreaLeagues(bot, query.message);
      break;
    case "Spain":
      sendSpainLeagues(bot, query.message);
      break;
    case "Spain Amateur":
      sendSpainAmateurLeagues(bot, query.message);
      break;
    case "Suriname":
      sendSurinameLeagues(bot, query.message);
      break;
    case "Swaziland":
      sendSwazilandLeagues(bot, query.message);
      break;
    case "Sweden":
      sendSwedenLeagues(bot, query.message);
      break;
    case "Sweden Amateur":
      sendSwedenAmateurLeagues(bot, query.message);
      break;
    case "Switzerland":
      sendSwitzerlandLeagues(bot, query.message);
      break;
    case "Switzerland Amateur":
      sendSwitzerlandAmateurLeagues(bot, query.message);
      break;
    case "Syria":
      sendSyriaLeagues(bot, query.message);
      break;
    case "Tajikistan":
      sendTajikistanLeagues(bot, query.message);
      break;
    case "Tanzania":
      sendTanzaniaLeagues(bot, query.message);
      break;
    case "Thailand":
      sendThailandLeagues(bot, query.message);
      break;
    case "Timor Leste":
      sendTimorLesteLeagues(bot, query.message);
      break;
    case "Trinidad and Tobago":
      sendTrinidadAndTobagoLeagues(bot, query.message);
      break;
    case "Tunisia":
      sendTunisiaLeagues(bot, query.message);
      break;
    case "Türkiye":
      sendTürkiyeLeagues(bot, query.message);
      break;
    case "Turkmenistan":
      sendTurkmenistanLeagues(bot, query.message);
      break;
    case "Uganda":
      sendUgandaLeagues(bot, query.message);
      break;
    case "Ukraine":
      sendUkraineLeagues(bot, query.message);
      break;
    case "Ukraine Amateur":
      sendUkraineAmateurLeagues(bot, query.message);
      break;
    case "United Arab Emirates":
      sendUnitedArabEmiratesLeagues(bot, query.message);
      break;
    case "Uruguay":
      sendUruguayLeagues(bot, query.message);
      break;
    case "Uruguay Amateur":
      sendUruguayAmateurLeagues(bot, query.message);
      break;
    case "USA":
      sendUsaLeagues(bot, query.message);
      break;
    case "USA Amateur":
      sendUsaAmateurLeagues(bot, query.message);
      break;
    case "Uzbekistan":
      sendUzbekistanLeagues(bot, query.message);
      break;
    case "Vanuatu":
      sendVanuatuLeagues(bot, query.message);
      break;
    case "Venezuela":
      sendVenezuelaLeagues(bot, query.message);
      break;
    case "Vietnam":
      sendVietnamLeagues(bot, query.message);
      break;
    case "Wales":
      sendWalesLeagues(bot, query.message);
      break;
    case "Zambia":
      sendZambiaLeagues(bot, query.message);
      break;
    case "Zanzibar":
      sendZanzibarLeagues(bot, query.message);
      break;
    case "Zimbabwe":
      sendZimbabweLeagues(bot, query.message);
      break;
    default:
      // Обработка, если callback_data не соответствует ни одной стране
      break;
  }
}

module.exports = {
  sendCountries: sendCountries,
  checkAndSendCallBack: checkAndSendCallBack
};
