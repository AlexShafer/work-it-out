const express = require("express");
const router = require("express").Router();
const {Workout} = require("../models");

router.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, workouts) => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then((found) => {
        res.json(found);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(newExercise => {
        res.json(newExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(
        { _id: params.id },
        { $push: { update: body }},
        { upsert: true, useFindAndModify: false }
        ).then(update => {
        res.json(update);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;