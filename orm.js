// require connection from mysql db

let connection = require("./connection");




































































































// let connection = require("./connection");

// function printQuestionMarks(num) {
//     var arr = [];
  
//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }
  
//   // Helper function to convert object key/value pairs to SQL syntax
//   function objToSql(ob) {
//     var arr = [];
  
//     // loop through the keys and push the key/value as a string int arr
//     for (var key in ob) {
//       var value = ob[key];
//       // check to skip hidden properties
//       if (Object.hasOwnProperty.call(ob, key)) {
//         // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }
//         // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//         // e.g. {sleepy: true} => ["sleepy=true"]
//         arr.push(key + "=" + value);
//       }
//     }
  
//     // translate array of strings to a single comma-separated string
//     return arr.toString();
//   }


// // test to see if a single route work - it does
// // app.get('/', function (req, res) {
// //     res.send('Hello World!')
// //   })

// // ORM to help with queries - GET/POST - these are templates used to better help us separate the queries from the api GET/POST reqs for cleaner code 
// let orm = {
//     // this is setting up the query for when I want to select * from the table in a GET request
//   all: (players, cb) => {
//     //   query to select * from the table
//     let queryString = "SELECT * FROM " + players + ";";
//     // this is connection to the SQL db
//     connection.query(queryString, (err, result) => {
//         // if there's an error, show it
//       if (err) {
//         throw err;
//       }
//       //otherwise, here's the result (which should be the table data)
//       cb(result);
//     });
//   },

//   // create function - a POST request to the database
//   create: (player) => {
    
//     let queryString = "INSERT INTO" + player;

//     queryString += "(";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";
//   }


// };
