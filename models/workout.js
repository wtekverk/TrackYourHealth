//takes in connection and datatypes
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({


    day: {
        type: Date,
        default: () => new Date(),
    },
    exercise: {
        type: {
            type: String,
            trim: true,
            required: "Enter exercise type",
        },

        name: {
            type: String,
            trim: true,
            required: "Enter exercise name",
        },

        weight: {
            type: Number,
        },

        sets: {
            type: Number,
        },

        reps: {
            type: Number,
        },

        distance: {
            type: Number,
        },

        duration: {
            type: Number,
            required: "Enter duration in minutes",
        }

    },
});


//dynamic property added to schema 
workoutSchema.virtual("totalDuration").get(function () {


    // just taking the sum for the deration of the exercises 
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});


//constant made with info above and exported to be used when producing the information on dashboard 
const Workout = mongoose.model("Workout", workoutSchema);


//export module
module.exports = Workout;