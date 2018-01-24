const express = require('express');
const fs = require('fs');
const { join } = require('path');
const app = express();

const lexer_path = '../rules/src/grammars';

const { lstatSync, readdirSync } = require('fs');

app.use(express.static('../rules/build'));

app.get("/", (req , res) => {
    res.send("Hello");
});

app.get("/grammars", (req, res) => {
    const isDirectory = source => name => lstatSync(join(source, name)).isDirectory();

    const getDirectories = source =>
      readdirSync(source).filter(isDirectory(source));

    const grammars =  getDirectories(lexer_path);

    res.send(grammars);
});


app.listen(3001, () => {
    console.log("Lexxer Server running");
});
