require("dotenv/config")

const appConfig = {
    PORT: process.env.PORT || 3000,
    EXTRATOCLUBE_API_LOGIN: process.env.EXTRATOCLUBE_API_LOGIN,
    EXTRATOCLUBE_CONSULT_ENDPOINT: process.env.EXTRATOCLUBE_CONSULT_ENDPOINT
};

module.exports = appConfig;