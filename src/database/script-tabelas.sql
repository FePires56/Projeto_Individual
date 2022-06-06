create database PlayCloud;
use PlayCloud;


create table votacao (
idVotacao int PRIMARY KEY AUTO_INCREMENT,
nomeCategoria varchar(45)
)AUTO_INCREMENT = 100;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
fkConvidado int,
constraint Usuario_fkConvidado foreign key (fkConvidado) references Usuario (idUsuario),
fkVotacao int,
constraint Usuario_fkVotacao foreign key (fkVotacao) references votacao (idVotacao),
acessoJogos boolean default 0
);


create table mensalidade (
fkUsuario int,
idMensalidade int,
primary key (fkUsuario, idMensalidade),
dataMensalidade date,
dataVencimento date,
valor decimal (5,2)
);


DESC Usuario;

insert into votacao(nomeCategoria) value 
('Ação e aventura'),
('Ação'),
('Terror'),
('Estratégia'),
('Esportes'),
('Diversão'),
('FPS'),
('RPG');

INSERT INTO Usuario VALUES

(null, 'fefe', 'fe@g.com', '123', null, 102, null),
(null, 'user1', '1@g.com', '123', null, 100, null),
(null, 'user2', '2@g.com', '123', null, 100, null),
(null, 'user3', '3@g.com', '123', null, 100, null),
(null, 'user4', '4@g.com', '123', null, 101, null),
(null, 'user5', '5@g.com', '123', null, 101, null),
(null, 'user6', '6@g.com', '123', null, 102, null),
(null, 'user7', '7@g.com', '123', null, 102, null),
(null, 'user8', '8@g.com', '123', null, 102, null),
(null, 'user9', '9@g.com', '123', null, 103, null),
(null, 'user10', '10@g.com', '123', null, 104, null),
(null, 'user11', '11@g.com', '123', null, 104, null),
(null, 'user11', '12@g.com', '123', null, 105, null),
(null, 'user11', '13@g.com', '123', null, 106, null),
(null, 'user11', '14@g.com', '123', null, 106, null),
(null, 'user11', '15@g.com', '123', null, 106, null),
(null, 'user11', '16@g.com', '123', null, 106, null),
(null, 'user11', '17@g.com', '123', null, 107, null),
(null, 'user12', '18@g.com', '123', null, 107, null);






select * from Usuario;

select count(FkVotacao) from Usuario where fkVotacao = 100;

select count(FkVotacao) from Usuario where fkVotacao = 101;

select count(FkVotacao) from Usuario where fkVotacao = 102;

select count(FkVotacao) from Usuario where fkVotacao = 103;

select count(FkVotacao) from Usuario where fkVotacao = 104;

select count(FkVotacao) from Usuario where fkVotacao = 105;

select count(FkVotacao) from Usuario where fkVotacao = 106;

select count(FkVotacao) from Usuario where fkVotacao = 107;                                                               

select nomeCategoria, count(idUsuario) as QtdVotos from Usuario, votacao where FkVotacao = idvotacao GROUP BY fkVotacao ORDER BY fkVotacao;