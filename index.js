/* Imports  */
const express = require("express");
const cors = require("cors");

// ?? Attaching routing to app server
const router = require('./routes/routing.js');

var corsOptions = {
    origin: "http://localhost:4200"
}

/* Iniciación de web server */ 
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use('/', router); // su ruta inicial sera raiz

const db = require('./model/db.model.js');
db.connection.connect(function (err) {
    if (err) throw err;
    console.log("Conexion a DB Exitosa");
});

app.get("/", (req,res) => {
    res.json({ message: "Inicio a servidor de aplicación" });
});

app.listen(port, () =>{
    console.log(`Servidor corriendo en puerto: ${port}`);
});