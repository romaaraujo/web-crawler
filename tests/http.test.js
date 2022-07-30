const request = require("supertest");
const app = require("./../src/index");

describe("when passed a invalid cpf", () => {
    test("should respond with a 400 status code", async () => {
        const response = await request(app).get("/benefit").send({
            cpf: "asdadasdadas",
            user: "username",
            password: "password"
        })
        expect(response.statusCode).toBe(400);
    });
});

describe("when passed a invalid credential", () => {
    test("should respond with a 401 status code", async () => {
        const response = await request(app).get("/benefit").send({
            cpf: "11111111111",
            user: "username",
            password: "password"
        })
        expect(response.statusCode).toBe(401);
    });
});