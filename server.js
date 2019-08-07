// importing express
import express from "express";

// start express.js engine
let app = express();

// build port
let PORT = 80 || 8080;

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());









// listener effectively starts out router
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});