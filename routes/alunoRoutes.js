const alunoController = require("../controllers/alunoController");
const Router = require("express").Router;
const router = Router();

router.get("/alunos", (req, res) => {
    alunoController.buscar()
        .then(alunos => res.status(200).json(alunos))
        .catch(error => res.status(400).json(error.message));
});

router.post("/aluno", (req, res) => {
    const novoAluno = req.body;
    alunoController.criar(novoAluno)
        .then(alunoInserido => res.status(201).json(alunoInserido))
        .catch(error => res.status(400).json(error.message));
});

router.put("/aluno/:id", (req, res) => {
    const { id } = req.params;
    const alunoAtualizado = req.body;
    alunoController.alterar(alunoAtualizado, id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/aluno/:id", (req, res) => {
    const { id } = req.params;
    alunoController.apagar(id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;