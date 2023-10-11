CREATE DATABASE SaleBook;

use  SaleBook;

CREATE TABLE Libros (
ID_LIBRO int not null,
ISBN int not null,
TUTULO varchar(70) not null,
AUTOR varchar(70),
EDICION varchar(10) not null,
CATEGORIA varchar(50) not null,
FECHA_PUBLICACION DATE not null,
EDITORIAL varchar(50),
IDIOMA varchar (50) not null,
VALOR_UNITARIO float not null,
STOCK int not null,
PRIMARY KEY (ID_LIBRO, ISBN)
);

CREATE TABLE Tipo_Documento (
ID_TIPO_DOCUMENTO int not null,
ABREVIATURA varchar(5) not null,
DESCRIPCION varchar(50) not null,
PRIMARY KEY (ID_TIPO_DOCUMENTO)
);

CREATE TABLE Cliente (
ID_LIBRO int not null,
ISBN int not null,
TUTULO varchar(70) not null,
AUTOR varchar(70),
EDICION varchar(10) not null,
CATEGORIA varchar(50) not null,
FECHA_PUBLICACION DATE not null,
EDITORIAL varchar(50),
IDIOMA varchar (50) not null,
VALOR_UNITARIO float not null,
STOCK int not null,

PRIMARY KEY (ID_LIBRO, ISBN)
);



