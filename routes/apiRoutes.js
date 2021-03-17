const db = require("../models");

module.exports = function (app) {



    // getting api/workout rout and running the workouts information 
    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}, (err, workouts) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });




    //posting information to the api/workouts route 
    app.post("/api/workouts", function (req, res) {
        //create empty object for workouts in db
        db.Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });


    //get api/workouts/range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts);
            }
        });
    });


    //post api/workouts/range

    app.post("/api/workouts/range", (req, res) => {
        db.Workout.create({}, (err, workouts) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts);
            }
        });
    });


    //put api/workouts/:id 

    app.put("/api/workouts/:workout", ({
        body,
        params
    }, res) => {
        db.Workout.findByIdAndUpdate({
                _id: params.workout
            }, {
                $push: {
                    exercises: body
                }
            }, {
                new: true,
                useFindAndModify: false
            })
            .then((Workout) => {
                res.json(Workout);
            })
            .catch((err) => {
                res.json(err);
            });
    });
};