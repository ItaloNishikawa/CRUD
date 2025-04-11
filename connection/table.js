class Tables{
    init(connect){
        this.connect = connect;
        this.createTableCliente();
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
        `
    }
}