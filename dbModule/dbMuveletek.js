const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

 fs.readFile(path.join(__dirname,"../config/configDB.json"), (err, data) =>{
    if(err) throw err;
    const config = JSON.parse(data);
    console.log(config[0])
})


const connection = mysql.createConnection({
    host: "localhost", //Ezt majd kívülről vesszük
    port: "3306", //Ezt majd kívülről vesszük
    database: "menetrend", //Ezt majd kívülről vesszük
    user: "menetrend", //Ezt majd kívülről vesszük
    password: "menetrend" //Ezt majd kívülről vesszük
});

module.exports.vonatLista = function (vId) {
        myQuery = `SELECT vNev, allId, ora, perc, jelleg FROM esemeny INNER JOIN vonat on vonat.vId=esemeny.vId WHERE vId=${vId}`;
        connection.query(myQuery, (err, result, fields) => {
                if (err) throw err;
                return JSON.parse(JSON.stringify(result));
            })
        }
       