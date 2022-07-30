const express = require("express");
const appConfig = require("./config/app");
const router = require("./router");
const app = express();

app.use(express.json());
app.use(router);

app.listen(appConfig.PORT, () => {
    console.log(`Servidor iniciado na porta ${appConfig.PORT}`);
})

module.exports = app;