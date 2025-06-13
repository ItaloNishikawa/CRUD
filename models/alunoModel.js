const connection = require("../connection/connection");

class AlunoModel {
    listar() {
        const sql = "SELECT * FROM aluno";
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Ocorreu um erro na consulta de alunos");
                    return reject(error);
                }
                console.log("Consulta de alunos realizada com sucesso");
                resolve(resposta);
            });
        });
    }

    criar(novoAluno) {
        const sql = 'INSERT INTO aluno SET ?';
        console.log("Dados do aluno a serem inseridos:", novoAluno);
        return new Promise((resolve, reject) => {
            connection.query(sql, novoAluno, (error, resposta) => {
                if (error) {
                    console.log("Erro ao inserir aluno");
                    console.log(error.message);
                    return reject(error);
                }
                console.log("Aluno inserido com sucesso");
                resolve({ aluno_numero: resposta.insertId, ...novoAluno });
            });
        });
    }

    atualizar(alunoAtualizado, aluno_numero) {
        const sql = "UPDATE aluno SET ? WHERE aluno_numero = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [alunoAtualizado, aluno_numero], (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar aluno");
                    console.log(error.message);
                    return reject(error);
                }
                console.log("Aluno atualizado com sucesso");
                resolve(resposta);
            });
        });
    }

    deletar(aluno_numero) {
        const sql = "DELETE FROM aluno WHERE aluno_numero = ?";
        return new Promise((resolve, reject) => {
            connection.query(sql, [aluno_numero], (error, resposta) => {
                if (error) {
                    console.log("Erro ao remover aluno");
                    return reject(error);
                }
                console.log("Aluno removido com sucesso");
                resolve(resposta);
            });
        });
    }
}

module.exports = new AlunoModel();
