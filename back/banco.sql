create database db_posts;

use db_posts;

CREATE TABLE usuarios(
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table chats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user1_id INT NOT NULL,
    user2_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

create table posts(
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR (255) NOT NULL DEFAULT "Manu",
    titulo VARCHAR (255) NOT NULL,
    legenda VARCHAR (255) NOT NULL
);

create table arquivos (
    id INT AUTO_INCREMENT PRIMARY KEY,
	nome_arquivo VARCHAR(255) NOT NULL UNIQUE,
    tipo_arquivo VARCHAR(255) NOT NULL,
    arquivo_url VARCHAR(255) NOT NULL UNIQUE,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select*from usuarios;
select*from chats;
select*from posts;
select*from arquivos;