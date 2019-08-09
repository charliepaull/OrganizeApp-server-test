// this will establish a connection to the SQL database

//  requiring mysql
let mysql = require("mysql");

// config connection to database
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "baseball_players"
});

// requiring hibernate ORM mapper
let jsORM = require('js-hibernate');
// create a session
let session = jsORM.session(connection);


// call connect() method on connection object - return err if err, return console.log of success if success
connection.connect(err => {
    if (err) {
      console.error("error connecting" + err.stack);
      return;
    }
  
    console.log("connected to the MySQL server");
    // selectAll();
    // insertPlayer();
  });
  

// create a session using session & jsORM globally
// create the map to look for what we are querying for
let playerMap = session.tableMap("Player")
    .columnMap("id", "id")
    .columnMap("player", "playerName");

// orm object

// query to select * from baseball_players
const selectAll = (baseball_players) => {
  let allPlayers = session.query(playerMap).select(baseball_players);
  allPlayers
    .then(result => {
      console.log(result); // array with result
      // will have to make sure this turns into a res.send w/ JSON
    })
    .catch(error => {
      console.log("Error: " + error);
    });
};


// inserting players into the DB
const insertPlayer = (player) => {
  playerMap = session.tableMap("Player")
    .columnMap("id", "id", { isAutoIncrement: true })
    .columnMap("player", "playerName");

  // this will have to capture the data from the form
  var newPlayer = {
    player: player
  };
  playerMap
    .Insert(newPlayer)
    .then(result => {
      console.log("inserted: " + result.affectedRows);
    })
    .catch(error => {
      console.log("Error: " + error);
    });
};

module.exports = connection;
