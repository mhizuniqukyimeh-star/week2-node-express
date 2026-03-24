
require("dotenv").config();

const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("<h1>My Week 2 API</h1>")
})

app.get("/hello", (req,res) => {
    res.send("<h1>Hello there! we are ready to take your orders</h1>")
})

app.post("/user", (req, res) => {
    const { name, email } = req.body;

    if (!name.trim()) {
        return res.send("Please provide your name");
    }

    res.send(`hello, ${name}`);
});


app.get("/user/:id", (req, res) => {
 const userId = req.params.name;

    res.send(`User ${id} profile`);
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
}); 

