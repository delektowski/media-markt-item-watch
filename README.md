<!-- GETTING STARTED -->

### Installation

1. Install NPM packages
   ```sh
   npm install
   ```
2. Enter your Telegram API data and port to serve the app in `.env`
   ```js
   TELEGRAM_TOKEN = "your-telegram-token";
   CHAT_ID = "your-telegram-chat-id";
   PORT = "port-to-serve-the-app";
   ```

<!-- USAGE EXAMPLES -->

### Usage

You can put your query and max/min price in:

```js
const queryString = "example query";
const minPrice = "100";
const maxPrice = "999";
```

You can set iteration time for sending requests:

```js
const iterationTimeInMinutes = 1;
```

<!-- CONTACT -->

### Contact

marcin.delektowski@gmail.com
