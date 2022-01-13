const mysql = require('mysql');
const config = require('../config/configDB.json');

const connection = mysql.createConnection({
    host: config.host, 
    port: config.port, 
    database: config.database, 
    user: config.user, 
    password: config.password
});

module.exports.vonatLista = function (vId) {
        myQuery = `SELECT vNev, allId, ora, perc, jelleg FROM esemeny INNER JOIN vonat on vonat.vId=esemeny.vId WHERE vId=${vId}`;
        connection.query(myQuery, (err, result, fields) => {
                if (err) throw err;
                return JSON.parse(JSON.stringify(result));
            })
        }
       