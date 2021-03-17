const db = require("../models");
const path = require("path");

module.exports = (app) => {


    //making home page/first page route attach to index.html
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    //attaching the exerside route to the exercise.html 
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });


    //attaching states html to the states route 
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};