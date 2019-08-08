// this will establish a connection to the SQL database

//  requiring mysql
let mysql = require("mysql");
// requiring hibernate ORM mapper
let jsORM = require('js-hibernate');
// create a session
let session = jsORM.session(connection);

// config connection to database
let connection = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "baseball_players"
};

// create a session using session & jsORM globally
// create the map to look for what we are querying for
let playerMap = session.tableMap("Player")
    .columnMap("id", "id")
    .columnMap("player", "player name");

// orm object

let baseballORM = {
    
}

// query to select * from baseball_players
let allPlayers = session.query(playerMap).select();
allPlayers
  .then(function(result) {
    console.log(result); // array with result
    // will have to make sure this turns into a res.send w/ JSON
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });



// call connect() method on connection object - return err if err, return console.log of success if success
connection.connect(err => {
  if (err) {
    console.error("error connecting" + err.stack);
    return;
  }

  console.log("connected to the MySQL server");
});

module.exports = connection;
