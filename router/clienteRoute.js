const Router = require("express").Route;
const router = Router();

//crud

router.get("/clientes", (req, res)=>{
    res.send("Clientes consultados com sucesso...");
} )

router.post("/cliente", (req, res)=>{
    res.send("Clientes cadastrado com sucesso...");
} )

router.put("/clientes/:id", (req, res)=>{
    const {id} = req.params;
    res.send("Clientes atualizado com sucesso...");
} )

router.delete("/clientes", (req, res)=>{
    const {id} = req.params;
    res.send("Clientes deletado com sucesso...");
} )

module.exports = router;