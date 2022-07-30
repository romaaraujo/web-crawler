const benefitRepository = require("../repositories/benefitRepository");
const crawlerService = require("../services/crawlerService");
const { validationResult } = require('express-validator');

const get = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        
        const credentials = { user, password } = req.body;
        const { cpf } = req.body;

        const serviceCredentials = await crawlerService.auth(credentials).catch(() => { return res.status(401).json({ "error": "Invalid Credentials" }) });

        const benefit = await benefitRepository.get(cpf, serviceCredentials);
        const benefitCode = benefit.beneficios.map((bn) => {
            return bn.nb;
        });

        if (benefitCode[0] === "Matrícula não encontrada!") return res.status(404).json({ cpf: cpf, "error": "Benefit code not found" });

        return res.json({ cpf: benefit.cpf, benefits: benefitCode });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ "error": "Internal Error" });
    }
}

module.exports = {
    get
}