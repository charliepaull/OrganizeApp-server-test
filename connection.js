// this will establish a connection to the SQL database
let mysql = require("mysql");

let connection = mysql.connection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "baseball_players"
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting" + err.stack);
        return;
    }
    
    console.log("connected as ID" + connection.threadID);
})

module.exports = connection; 