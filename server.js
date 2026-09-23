const express = require("express");

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get("/", (req, res) => {
    res.send("Welcome to Express Basics!");
});


app.get("/about", (req, res) => {
    res.send("This is the About page.");
});


app.get("/contact", (req, res) => {
    res.send("This is the Contact page.");
});


app.get("/user/:name", (req, res) => {
    const name = req.params.name;

    res.send(`Hello, ${name}! Welcome to our website.`);
});


app.get("/product/:id/:category", (req, res) => {
    const id = req.params.id;
    const category = req.params.category;

    res.send(`Product ID: ${id}, Category: ${category}`);
});


app.get("/search", (req, res) => {
    const keyword = req.query.keyword;
    const category = req.query.category;

    res.send(
        `Search Keyword: ${keyword}, Category: ${category}`
    );
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});