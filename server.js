///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// Init .env vars
require("dotenv").config();

const { PORT, MONGODB_URI } = process.env;
// const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI

const express = require("express");
const app = express();

// Add in mongoose
const mongoose = require('mongoose');

// My controllers 
const peopleController = require('./controllers/people-controller')

// Cors and morgan
const cors = require("cors");
const morgan = require("morgan");

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("This is my awesome amazing connection man"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));


///////////////////////////////
// MIDDLEWEAR
////////////////////////////////
app.use(express.json()); //parse json
app.use(cors()); //We now pray to whatever higher power or God we have that this works
app.use(morgan("dev"));

app.use('/people', peopleController);

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route



app.get("/", (req, res) => {
    res.send("Hello world");
})

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => {
    console.log(`I'm totally listening to you on port ${PORT}`)
})