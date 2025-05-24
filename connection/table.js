class Tables{
    init(connect){
        this.connect = connect;
        this.createTableCliente();
        this.createTableProduto();
    }

    createTableCliente(){
        const sql = 
        ` 
            CREATE TABLE IF NOT exists clientes (
            id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            nome VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            telefone VARCHAR(15) NOT NULL UNIQUE,
            data_de_nascimento DATE,
            data_cadastro DATE
            );
        `;

        this.connect.query(sql,(error) => {
            if (error){
                console.log("Erro ao criar tabela Clientes");
                console.log(error.message);
                return;
            }

            console.log("Tabela Cliente criada com sucesso / minha nossa Cr7 de bicicleta");
        });

    }

    createTableProduto(){
        const sql = 
        ` 
            CREATE TABLE IF NOT exists produtos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            descricao TEXT,
            preco DECIMAL(10, 2) NOT NULL,
            quantidade INT DEFAULT 0
            );
        `;

        this.connect.query(sql,(error) => {
            if (error){
                console.log("Erro ao criar tabela Produtos");
                console.log(error.message);
                return;
            }

            console.log("Tabela Produtos criada sucesso / Block By James");
        });

    }

}

module.exports = new Tables();