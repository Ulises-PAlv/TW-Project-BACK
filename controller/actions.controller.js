const db = require('../model/db.model.js');

exports.addUser = (req, res) => {
    if (!req.body) {
        req.status(400).send({ message: "El contenido de la petición no puede estar vacío" });
        return;
    }

    const user = {
        nombreA: req.body.name,
        emailA: req.body.email,
        usrNameA: req.body.usrName,
        passwdA: req.body.passwd,
        roleA: req.body.role,
        asignados: req.body.asignados
    }

    var query = `INSERT INTO Users (Nombre,Email,UsrName,Pswd,Role,Asignados) VALUES ('${user.nombreA}','${user.emailA}','${user.usrNameA}','${user.passwdA}','${user.role}', ${user.asignados})`;
    db.query(query, function (err, result) {
        if (err) throw err;
        console.log("1 Row Affected : User Added");
    });
}

exports.validateLogin = (req, res) => {
    var query = `SELECT UsrName, Pswd FROM Users WHERE UsrName = '${req.params.usrName}'`;

    db.query(query, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
}