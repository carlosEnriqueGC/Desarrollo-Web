/*esto es para desarrollo web*/
CREATE SCHEMA IF NOT EXISTS `bd_server` DEFAULT CHARACTER SET utf8 ;
USE `bd_server` ;
-- ------------------mantenimientos

CREATE TABLE IF NOT EXISTS tbl_bitacora (
	id int NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50),
	PRIMARY KEY (id)
) ENGINE=InnoDB CHARACTER SET = latin1;    
