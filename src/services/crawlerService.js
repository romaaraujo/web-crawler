const appConfig = require("../config/app");
const httpService = require("./httpService");

const apiLoginEndpoint = appConfig.EXTRATOCLUBE_API_LOGIN;
const apiConsultEndpoint = appConfig.EXTRATOCLUBE_CONSULT_ENDPOINT;

const crawlerService = {
    auth: (credentials) => {
        return new Promise(async (resolve, reject) => {
            try {
                const auth = await httpService(headers = {
                    'Content-Type': 'application/json'
                }).post(apiLoginEndpoint, {
                    login: credentials.user,
                    senha: credentials.password
                });

                return resolve(auth.headers.authorization);
            } catch (err) {
                return reject(err);
            }
        });
    },
    getBenefitData: (cpf, token) => {
        return new Promise(async (resolve, reject) => {
            try {
                const benefitData = await httpService(headers = {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }).get(apiConsultEndpoint + cpf);

                return resolve(benefitData);
            } catch (err) {
                return { "error": "Invalid Credentials" };
            }
        });
    }
}

module.exports = crawlerService;