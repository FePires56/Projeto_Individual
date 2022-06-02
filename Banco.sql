create database FPGames;
use FPGames;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45)
);

select * from Usuario;