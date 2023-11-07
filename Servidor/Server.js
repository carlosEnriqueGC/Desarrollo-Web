const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

const db = mysql.createConnection({
  host: 'localhost', //  dirección del servidor MySQL
  user: 'root',
  password: '',
  database: 'bd_server'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.message);
  } else {
    console.log('Conexión a la base de datos establecida');
    
    const query = 'INSERT INTO tbl_bitacora (nombre) VALUES (?)';
    const values = ['Se accedió al proyecto'];

    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error al insertar en la base de datos: ' + err.message);
      } else {
        console.log('Registro insertado con éxito');
      }

      // Cerrar la conexión a la base de datos una vez que la consulta ha terminado
      db.end();

      // Salir del proceso de Node.js
      process.exit(0);
    });
  }
});