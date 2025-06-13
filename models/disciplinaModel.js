const connection = require("../connection/connection");

class DisciplinaModel {
    listar() {
        const sql = "SELECT * FROM disciplina";
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Ocorreu um erro na consulta de disciplinas");
                    return reject(error);
                }
                console.log("Consulta de disciplinas realizada com sucesso");
                resolve(resposta);
            });
        });
    }

    criar(novaDisciplina) {
        const sql = "INSERT INTO disciplina SET ?";
        console.log("Dados da disciplina a serem inseridos:", novaDisciplina);
        return new Promise((resolve, reject) => {
            connection.query(sql, novaDisciplina, (error, resposta) => {
                if (error) {
                    console.log("Erro ao inserir disciplina");
                    console.log(error.message);
                    return reject(error);
                }
                console.log("Disciplina inserida com sucesso");
                resolve({ disc_codigo: resposta.insertId, ...novaDisciplina });
            });
        });
    }

    atualizar(disciplinaAtualizada, disc_codigo) {
        const sql = "UPDATE disciplina SET ? WHERE disc_codigo = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [disciplinaAtualizada, disc_codigo], (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar disciplina");
                    console.log(error.message);
                    return reject(error);
                }
                console.log("Disciplina atualizada com sucesso");
                resolve(resposta);
            });
        });
    }

    deletar(disc_codigo) {
        const sql = "DELETE FROM disciplina WHERE disc_codigo = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [disc_codigo], (error, resposta) => {
                if (error) {
                    console.log("Erro ao remover disciplina");
                    return reject(error);
                }
                console.log("Disciplina removida com sucesso");
                resolve(resposta);
            });
        });
    }
}

module.exports = new DisciplinaModel();
