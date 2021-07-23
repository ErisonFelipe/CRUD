var express = require('express');
var cors = require('cors');

var app = express();

// permissão de url que poderá consumir está api
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next();
});

//Rotas
var rotaRegistros = require('./routes/registro.routes');
app.use(rotaRegistros);

app.listen(3030, ()=>{
    console.log('Servidor rodando na porta 3030!')
});