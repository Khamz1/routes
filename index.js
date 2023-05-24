const express = require('express');
const app = express();

app.use(require("./products.route"))
app.use(require("./brands.route"))

app.listen(3000,(err)=>{
    if(err){console.log('Ошибка запуска сервера')}
    else{console.log("Ваш сервер запущен")}
})

