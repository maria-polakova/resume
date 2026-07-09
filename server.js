const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.'));

app.listen(port, () => {
    console.log(`✅ Сервер запущен! Открой браузер и перейди по адресу: http://localhost:${port}`);
});