const professorModel = require("../models/professorModel");

class ProfessorController {
    buscar() {
        return professorModel.listar();
    }

    criar(novoProfessor) {
        return professorModel.criar(novoProfessor);
    }

    alterar(professorAtualizado, id) {
        return professorModel.atualizar(professorAtualizado, id);
    }

    apagar(id) {
        return professorModel.deletar(id);
    }
}

module.exports = new ProfessorController();
