const app = require("./app");

const PORT = 2206

app.listen(PORT, ()=> {
    console.log(`servideor rodando na porta ${PORT}. Em : http://localhost:${PORT}/api`);
})