class Tables{
    init(connect){
        this.connect = connect;
        this.createTableProfessor();
        this.createTableAluno();
        this.createTableDisciplina()
    }

    createTableProfessor(){
        const sql = 
        ` 
            CREATE TABLE IF NOT EXISTS professor (
                prof_numero INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                prof_nome VARCHAR(100) NOT NULL,
                prof_rua VARCHAR(100),
                prof_cidade VARCHAR(50)
            );
        `;

        this.connect.query(sql,(error) => {
            if (error){
                console.log("Erro ao criar tabela Clientes");
                console.log(error.message);
                return;
            }

            console.log("Tabela Professor criada com sucesso / minha nossa Cr7 de bicicleta");
        });

    }

    createTableAluno(){
        const sql = 
        ` 
        CREATE TABLE IF NOT EXISTS aluno (
            aluno_numero INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            aluno_nome VARCHAR(100) NOT NULL,
            aluno_rua VARCHAR(100),
            aluno_cidade VARCHAR(50)
        );

        `;

        this.connect.query(sql,(error) => {
            if (error){
                console.log("Erro ao criar tabela Produtos");
                console.log(error.message);
                return;
            }

            console.log("Tabela Alunos criada sucesso / Block By James");
        });

    }

    createTableDisciplina(){
        const sql = 
        ` 
        CREATE TABLE IF NOT EXISTS disciplina (
            disc_codigo INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            disc_nome VARCHAR(100) NOT NULL,
            curso_nome VARCHAR(100) NOT NULL,
            qtd_aulas INT NOT NULL CHECK (qtd_aulas > 0)
        );

        `;

        this.connect.query(sql,(error) => {
            if (error){
                console.log("Erro ao criar tabela Produtos");
                console.log(error.message);
                return;
            }

            console.log("Tabela Alunos criada sucesso / Block By A.D.");
        });

    }

}

module.exports = new Tables();