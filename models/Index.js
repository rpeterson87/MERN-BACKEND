//  for bext practice you can have your connect here 
const mongoose = require('mongoose');
require("dotenv").config();

const { MONGODB_URI } = process.env;
mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("Duck Duck...Oh wait this is Mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));

module.exports = {
    People: require('./People')
}