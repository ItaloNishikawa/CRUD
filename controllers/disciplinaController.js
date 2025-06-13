const disciplinaModel = require("../models/disciplinaModel");

class DisciplinaController {
    buscar() {
        return disciplinaModel.listar();
    }

    criar(novaDisciplina) {
        return disciplinaModel.criar(novaDisciplina);
    }

    alterar(disciplinaAtualizada, id) {
        return disciplinaModel.atualizar(disciplinaAtualizada, id);
    }

    apagar(id) {
        return disciplinaModel.deletar(id);
    }
}

module.exports = new DisciplinaController();