const axios = require("axios");
require("dotenv").config();
const cheerio = require("cheerio");
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_TOKEN;
const PORT = process.env.PORT;
const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(token, { polling: true });
const app = express();

const queryString = "macbook m1";
const minPrice = "13000";
const maxPrice = "99999";
const iterationTimeInMinutes = 1;

const url = `https://mediamarkt.pl/search?query%5Bmenu_item%5D=&query%5Bquerystring%5D=${handleTransformToQuery()}&priceFilter%5Bmin%5D=${minPrice}&priceFilter%5Bmax%5D=${maxPrice}`;

function handleTransformToQuery() {
  return queryString.split(" ").join("+");
}

setInterval(() => {
  axios(url).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const listItems = $(".m-offerBox_box");

    const itemsNumber = listItems.length;

    if (itemsNumber >= 1) {
      listItems.each(function (_, item) {
        const itemDescription = $(item).find("a").attr("title");
        console.log("itemDescription: ", itemDescription);
        bot.sendMessage(chatId, itemDescription);
      });
    }
  });
}, iterationTimeInMinutes * 60000);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
