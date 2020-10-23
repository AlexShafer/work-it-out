const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: [true, "Enter Exercise Name"]
    },
    type: {
      type: String,
      trim: true,
      required: [true, "Enter Exercise Type"]
    },
    duration: {
      type: Number,
      required: [true, "Enter Exercise Duration"]
    },
    distance: {
      type: Number,
      required: [true, "Enter Exercise Distance"]
    },
    weight: {
      type: Number,
      required: [true, "Enter Exercise Weight"]
    },
    sets: {
      type: Number,
      required: [true, "Enter the number of Sets"]
    },
    reps: {
      type: Number,
      required: [true, "Enter the number of Reps"]
    }
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    ExerciseSchema
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;