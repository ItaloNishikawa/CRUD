const express  = require("express");
const app = express();
const port = 3000;

//const router = require("./routes/moduleRoute")

//router(app);

app.listen(port, (error) => {
    if(error){
        console.log("Deu erro");
    }
    else{
        console.log("Sistema rodando")
    }
})