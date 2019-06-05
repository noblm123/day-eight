const express = require("express");

const app = express();

app.listen(3000, () => console.log("Hello world"));

const User = require("./user");

var newUser = {
    name: "Miki",
    role: "Super Admin",
    email: "mail@test.com",
    password: "qwerty"
};
User.createUser(newUser, (err, result) => {
    console.log(err);
    console.log(result);
});

app.post("/api/users", (req, res) => {
    const user = req.body;
    User.createUser(user, (err, result) => {
        console.log(err);
        console.log(result);
        return res.status(200).json({id: result});
    });
});