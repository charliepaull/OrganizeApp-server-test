// importing express
let express = require("express");

// start express.js engine using express() method
let app = express();

// build port
let PORT = 80 || 8080;

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// // GET request to the sql database
// app.get("/playersData", function(req, res){

// })

// ex get route to assure something gets sent to the page //works
app.get("/", (req, res) => {
  res.send("Hello!")
})

// listener effectively starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
