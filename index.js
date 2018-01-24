const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('../rules/build'));

app.get("/", (req , res) => {
    res.send("Hello");
});

app.get("/grammars", (req, res) => {
    const grammars =  ['Hello', 'ETMRules', 'arithmetic', 'SQLite', 'other'];

    res.send(grammars);
});


app.listen(3001, () => {
    console.log("Lexxer Server running");
});
