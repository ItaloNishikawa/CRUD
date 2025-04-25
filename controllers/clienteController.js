const clienteModel = require("../models/clienteModel");

class clienteController{
    buscar(){
        //return clienteModel.listar();
        return "Consulta realizada com sucesso..."
    }

    criar(){
        return "Criação realizada com sucesso..."
    }

    alterar(){
        return "Alterado o cliente com codigo"+id+" com sucesso..."
    }

    apagar(){
        return "Deletado o cliente com codigo"+id+"..."
    }

}

module.exports = new clienteController();