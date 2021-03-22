//Dependencies 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//set port on either heroku or 8080
const PORT = process.env.PORT || 8080;



const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


//attaching required routes 
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//listening to port and printing to terminal 
app.listen(PORT, () => {
    console.log(`App Listening On: ${PORT}`);
});