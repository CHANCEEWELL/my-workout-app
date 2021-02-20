const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "cardio or resistance"
            },

            name: {
                type: String,
                trim: true,
                required: "Enter name for workout"
            },

            sets: {
                type: Number,
                trim: true,
            },

            distance: {
                type: Number,
                trim: true,
            },

            duration: {
                type: Number,
                trim: true,
                required: "Total time spent exercising"
            },

            reps: {
                type: Number,
                trim: true,
            },

            weight: {
                type: Number,
                trim: true,
            },
        }
    ]
},{
    toJSON:{
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, currentExercise) => {
        return total+currentExercise.duration
    },0)
})
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;