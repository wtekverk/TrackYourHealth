const path = require("path");



module.exports = function (app) {




    //gets info for home page and sets it on first page
    app.get("/", function (req, res) {

        //use html index
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //gets info for exercise page and sets it on /exercise route
    app.get("/exercise", function (req, res) {

        //use html exercise 
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });


    //gets stats page info and sets it on /stats route
    app.get("/stats", function (req, res) {

        //use html stats
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

}