const express = require('express');
const fs = require('fs');
var cors = require('cors')
const { join } = require('path');
const app = express();

const lexer_path = '../rules/src/grammars';

const { lstatSync, readdirSync } = require('fs');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));
//app.use(express.static('./public'));

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


app.listen(80, () => {
    console.log("Lexxer Server running");
});
