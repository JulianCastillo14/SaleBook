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
ID_CLIENTE int not null,
NUMERO_DOCUMENTO int not null,
ID_TIPO_DOCUMENTO int not null,
PRIMER_NOMBRE varchar(60) not null,
SEGUNDO_NOMBRE varchar(60),
PRIMER_APELLIDO varchar(60) not null,
SEGUNDO_APELLIDO varchar(60),
FECHA_NACIMIENTO date not null,
GENERO varchar(20),
CORREO varchar(80) not null,
CONTRASEÑA varchar(255) not null,

PRIMARY KEY (ID_CLIENTE, NUMERO_DOCUMENTO),
FOREIGN KEY(ID_TIPO_DOCUMENTO) REFERENCES Tipo_documento(ID_TIPO_DOCUMENTO)
);


CREATE TABLE Factura(
ID_FACTURA int not null,
FECHA datetime not null,
ID_CLIENTE int not null,
SUB_TOTAL float not null,
DESCUENTO float not null,
IVA float not null,
VALOR_TOTAL float not null,

PRIMARY KEY(ID_FACTURA),
FOREIGN KEY(ID_CLIENTE) REFERENCES Cliente(ID_CLIENTE)
);

CREATE TABLE Libro_Por_Factura(
ID_LIBRO int not null,
ID_FACTURA int not null,
CANTIDAD int not null,
FOREIGN KEY(ID_LIBRO) REFERENCES Libros(ID_LIBRO),
FOREIGN KEY(ID_FACTURA) REFERENCES Factura(ID_FACTURA)
);



