const connection = require("../connection/connection");

class professorModel {
    listar() {
        const sql = "SELECT * FROM professor";
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Ocorreu um erro na consulta");
                    return reject(error);
                }
                console.log("Consulta realizada com sucesso");
                resolve(resposta);
            });
        });
    }

    criar(novoProfessor) {
        const sql = 'INSERT INTO professor SET ?';
        console.log("Dados do professor a serem inseridos:", novoProfessor);
        return new Promise((resolve, reject) => {
            connection.query(sql, novoProfessor, (error, resposta) => {
                if (error) {
                    console.log("Erro ao inserir professor");
                    console.log(error.message);
                    return reject(error);
                }
                console.log("Professor inserido com sucesso");
                resolve({ id: resposta.insertId, ...novoProfessor});
            });
        });
    }

    atualizar(professorAtualizado, id) {
        const sql = "UPDATE clientes SET ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [professorAtualizado, id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar professor");
                    console.log(error.message);
                    return reject(error);
                }
                console.log("Professor atualizado com sucesso");
                resolve(resposta);
            });
        });
    }

    deletar(id) {
        const sql = "DELETE FROM professor WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Ocorreu um erro na remoção");
                    return reject(error);
                }
                console.log("Remoção realizada com sucesso");
                resolve(resposta);
            });
        });
    }
}

module.exports = new professorModel();

