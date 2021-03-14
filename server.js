//Dependencies 
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');


//setting port to listen on 
const PORT = process.env.PORT || 8080;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));


//setting up info and creation of DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittrack", {
    useNewUrlParser: true,
    useFindAndModify: false
});



//Attaching routes 
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)



//console log of port running 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})