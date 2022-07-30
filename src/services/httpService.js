const axios = require("axios");

const httpService = (headers = {}) => axios.create({
    timeout: 1000,
    headers: headers
});

module.exports = httpService;