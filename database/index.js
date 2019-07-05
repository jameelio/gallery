//Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://darknight:Jcgedulddarknightdev1!@darknight-0zvod.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;


module.exports = mongoose;
