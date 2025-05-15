const connection = require("../connection/connection");

class clienteModel{
    listar(){
        const sql = "select * from clientes";
         return new Promise((resolve, reject) => {
            connection.query(sql, {}, (error, resposta) =>{
                if(error){
                    console.log("Ocorreu um erro na consulta");
                    reject(error);
                }
                console.log("Consulta realizada com sucesso")
                resolve(resposta);
            })
        })
    }


    criar(novoCliente){
        const sql = 'insert into clientes set ?';
        console.log("Dados do cliente a serem inseridos:", novoCliente);
        return new Promise ((resolve, reject) =>{

            connection.query(sql, novocliente,(error, resposta) => {
                if(error){
                    console.log("Erro ao inserir cliente");
                    console.log(error,message);
                    reject(error);
                }
                console.log("cliente inserido com sucesso");
                resolve(resposta);
            })


        })
    }

    atualizar(clienteAtualizado, id){
        const sql = "update clientes set ? where id=?";
        return new Promise ((resolve, reject ) => {
            connection.query(sql, {clienteAtualizado, id}, (error, resposta) =>{
                if(error){
                    console.log("Erro ao atualizar cliente");
                    console.log(error.message);
                    reject(error);
                }

                console.log("cliente atualizado com sucesso");
                resolve(resposta);

            })
        })
    }

    deletar(clienteAtualizado, id){
        const sql = "delete from clientes where id=?";
        return new Promise ((resolve, reject ) => {
            connection.query(sql, {clienteAtualizado, id}, (error, resposta) =>{
                if(error){
                    console.log("Ocorreu um erro na remoção");
                    reject(error);
                }

                console.log("Remoção realizada com sucesso");
                resolve(resposta);

            })
        })
    }


}

module.exports = new clienteModel();
