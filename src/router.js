const router = require("express").Router();
const { api } = require("./fake.api");
const jwt = require("jsonwebtoken");



router.get("/", (_request, response)=> {
    response.status(200).send(`Bem-vindo à minha aplicação Node.js! 
    <br/><br/>
    <button>
        <a href="/api/users">getUser<a/>
    </button>
    
    `);
});

router.get("/api/users", (_request, response)=> {
    response.status(200).json({
        error: false,
        message: "Requisição bem sucedida!!", 
        data: api.users
    });
});




router.post("/account", (request, response) => {
    const { email, password } = request.body;

    const user = api.users.find((user) => user.email.toLowerCase() === email.toLowerCase());

    if (user) {
        if (user.password === password) {
            response.status(200).json({
                error: false,
                message: "successful request",
                data: {
                    user,
                    token: jwt.sign(user, "shfdsafhbdfhabchhdfbekfkakdiaureXEUFQIU3R23282", { expiresIn: "1h"})
                }
            });
        } else {
            response.status(401).json({
                error: true,
                message: "Invalid credentials"
            });
        }
    } else {
        response.status(404).json({
            error: true,
            message: "User not found"
            
        });
    }
});



module.exports = router;