const disciplinaController = require("../controllers/disciplinaController");
const Router = require("express").Router;
const router = Router();

router.get("/disciplinas", (req, res) => {
    disciplinaController.buscar()
        .then(disciplinas => res.status(200).json(disciplinas))
        .catch(error => res.status(400).json(error.message));
});

router.post("/disciplina", (req, res) => {
    const novaDisciplina = req.body;
    disciplinaController.criar(novaDisciplina)
        .then(disciplinaInserida => res.status(201).json(disciplinaInserida))
        .catch(error => res.status(400).json(error.message));
});

router.put("/disciplina/:id", (req, res) => {
    const { id } = req.params;
    const disciplinaAtualizada = req.body;
    disciplinaController.alterar(disciplinaAtualizada, id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/disciplina/:id", (req, res) => {
    const { id } = req.params;
    disciplinaController.apagar(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;