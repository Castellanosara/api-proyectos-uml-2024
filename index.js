//librerias
const express = require('express')
const mysql = require ('mysql2')
const cors = require ('cors')
const bodyparser = require ('body-parser')
const nodemon= require ('nodemon')

//datos de la conexcion
const config = {
    host: '127.0.0.1',
    user:'root',
    password:'sara',
    database:'proyectos'
}
//conexion
const bd = mysql.createConnection(config);

//verificar
bd.connect((err) =>{
    if (err){
        console.log('error de conexion',err);
        return;
    }
    console.log('conexion exitosa')
});

// servidor express
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
//ruta
app.get('/proyectos',(req, res) => {
    bd.query('SELECT*FROM proyectos',(err,result)=>{
        if (err){
            console.log('error al obtener los proyectos',err);
            return;
        }
        res.json(result);
    })
})

app.listen(3000, ()=>{
    console.log ('servidor corriendo en el puerto 3000')
})