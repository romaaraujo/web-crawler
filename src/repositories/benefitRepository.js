const crawlerService = require("../services/crawlerService");

const benefitRepository = {
    get: async (cpf, credentials) => { return (await crawlerService.getBenefitData(cpf, credentials)).data || []; }
};

module.exports = benefitRepository;