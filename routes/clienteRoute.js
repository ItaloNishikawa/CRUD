const clienteControllers = require("../controllers/clienteControllers");

const Router = require("express").Router;
const router = Router();

router.get("/clientes", (req, res) => {
    const respcontroller = clienteControllers.buscar();
    respcontroller.then(clientes => res.status(200).json(clientes))
                .catch(error => res.status(400).json(error.message))
});

router.post("/cliente", (req, res) => {
    res.send("Cliente cadastrado com sucesso");
    const novoCliente = req.body;
    const cliente = clienteControllers.criar(novoCliente);
    cliente.then(clienteInserido => res.status(201).json(clienteInserido))
            .catch(error => res.status(400).json(error.message));
});

router.put("/cliente/:id", (req, res) => {
    const {id} = req.params;
    const clienteAtualizado = req.body;
    const clienteAtualizar = clienteControllers.alterar(clienteAtualizado4, id);
    clienteAtualizar.then(resultAtualizado => res.status(200).json(resultAtualizado))
                    .catch(error => res.status(400).json(error.message));
});

router.delete("/cliente/:id", (req, res) => {
    const {id} = req.params;
    const clienteDeletado = req.body;
    const clienteDeletar = clienteControllers.apagar(clienteDeletado, id);
    clienteDeletar.then(clienteDeletado => res.status(200).json(clienteDeletado))
                    .catch(error => res.status(400).json(error.message));
});

module.exports = router;