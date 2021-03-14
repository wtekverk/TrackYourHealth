const workout = require("../models /workout")

module.exports = function (app) {



    //get api/workouts

    app.get("/api/workouts", (req, res) => {
        workout.find({}, (err, workouts) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });


    //post api/workouts


    app.post("/api/workouts", function (req, res) {
        //create empty object for workouts in db
        workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });


    //get api/workouts/range



    //post api/workouts/range




    //put api/workouts/:id 













}