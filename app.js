const express  = require("express");
const app = express();
const port = 3000;

const router = require("./routes/moduleRoute.js");
const conexao = require("./connection/connection.js");
const table = require("./connection/table.js");

table.init(conexao);

router(app);

app.listen(port, (error) => {
    if(error){
        console.log("Deu erro");
    }
    else{
        console.log("Sistema rodando")
    }
})