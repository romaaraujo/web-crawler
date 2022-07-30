# Crawler

Trata-se de um WebCrawler para busca de matrícula de benefício por CPF, passando por barreira de autenticação.

### Utilizando a API

- Inicializando o servidor
```bash
# Renomeie o arquivo .env-example para .env
$ npm install
$ npm run dev
```

- Exemplo de consulta (Body JSON)
```bash
# Método GET
{
    "cpf": "11111111111",
    "user": "****",
    "password": "*****"
}
```
**PS**: Um arquivo do `Postman Collection` foi fornecido na raiz do projeto para melhor experiência nos testes.

### Testes Unitátios
O diretório dos testes se encontra na raiz do projeto em `/tests`.
```bash
$ npm run test
```

### Tecnologias Utilizadas
- NodeJS
- Express
- Axios
- Jest