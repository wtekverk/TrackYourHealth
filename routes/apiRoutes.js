const Workout = require("../models /workout")

module.exports = function (app) {



    //get api/workouts

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });



    //post api/workouts



    //get api/workouts/range



    //post api/workouts/range




    //put api/workouts/:id 













}