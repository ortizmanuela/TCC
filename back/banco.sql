create database db_posts;

use db_posts;

CREATE TABLE usuarios(
    id INT PRIMARY KEY auto_increment,
    email VARCHAR(100) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table formulario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL UNIQUE,
    numero_telefone VARCHAR (11) NOT NULL UNIQUE,
    observaçoes VARCHAR (1000) NOT NULL
);

create table posts(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR (255) NOT NULL DEFAULT "Manu",
    titulo VARCHAR (255) NOT NULL,
    legenda VARCHAR (255) NOT NULL
);

CREATE TABLE arquivos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    arquivo_name VARCHAR(255) NOT NULL,
    arquivo_url VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

select*from usuarios;	
select*from formulario;
select*from posts;
select*from arquivos;

drop table usuarios;
drop table formulario;