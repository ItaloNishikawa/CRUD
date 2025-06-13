const alunoModel = require("../models/alunoModel");

class AlunoController {
    buscar() {
        return alunoModel.listar();
    }

    criar(novoAluno) {
        return alunoModel.criar(novoAluno);
    }

    alterar(alunoAtualizado, id) {
        return alunoModel.atualizar(alunoAtualizado, id);
    }

    apagar(id) {
        return alunoModel.deletar(id);
    }
}

module.exports = new AlunoController();