const connection = require("../connection/connection");

class produtoModel{
    listar(){
        const sql = "select * from produtos";
         return new Promise((resolve, reject) => {
            connection.query(sql, {}, (error, resposta) =>{
                if(error){
                    console.log("Ocorreu um erro na consulta");
                    return reject(error);
                }
                console.log("Consulta realizada com sucesso")
                resolve(resposta);
            })
        })
    }


    criar(novoProduto){
        const sql = 'insert into produtos set ?';
        console.log("Dados do produto a serem inseridos:", novoProduto);
        return new Promise ((resolve, reject) =>{

            connection.query(sql, novoProduto,(error, resposta) => {
                if(error){
                    console.log("Erro ao inserir produto");
                    console.log(error.message);
                    return reject(error);
                }
                console.log("produto inserido com sucesso");
                resolve(resposta);
            })


        })
    }

    atualizar(produtoAtualizado, id){
        const sql = "update produtos set ? where id=?";
        return new Promise ((resolve, reject ) => {
            connection.query(sql, [produtoAtualizado, id], (error, resposta) =>{
                if(error){
                    console.log("Erro ao atualizar produto");
                    console.log(error.message);
                    return reject(error);
                }

                console.log("produto atualizado com sucesso");
                resolve(resposta);

            })
        })
    }

    deletar(id){
        const sql = "delete from produtos where id=?";
        return new Promise ((resolve, reject ) => {
            connection.query(sql, [id], (error, resposta) =>{
                if(error){
                    console.log("Ocorreu um erro na remoção");
                    return reject(error);
                }

                console.log("Remoção realizada com sucesso");
                resolve(resposta);

            })
        })
    }


}

module.exports = new produtoModel();
