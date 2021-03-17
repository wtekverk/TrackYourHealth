//takes in connection and datatypes
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{

        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },

        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },

        weight: {
            type: Number
        },

        reps: {
            type: Number
        },

        sets: {
            type: Number
        },

        distance: {
            type: Number
        },

        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
        },
    }]
}, {
    toJSON: {

        // makes it so the duration and minutes can be stored for addition 
        virtuals: true
    }
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