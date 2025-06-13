const professorController = require("../controllers/professorController");
const Router = require("express").Router;
const router = Router();

router.get("/professores", (req, res) => {
    professorController.buscar()
        .then(professores => res.status(200).json(professores))
        .catch(error => res.status(400).json(error.message));
});

router.post("/professor", (req, res) => {
    const novoProfessor = req.body;
    professorController.criar(novoProfessor)
        .then(professorInserido => res.status(201).json(professorInserido))
        .catch(error => res.status(400).json(error.message));
});

router.put("/professor/:id", (req, res) => {
    const { id } = req.params;
    const professorAtualizado = req.body;
    professorController.alterar(professorAtualizado, id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/professor/:id", (req, res) => {
    const { id } = req.params;
    professorController.apagar(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;
