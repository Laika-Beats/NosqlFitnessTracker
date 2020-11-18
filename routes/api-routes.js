const { db } = require("../models/Workout")

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.send(err)
        })
});

app.post("/api/workouts", (req, res) => {
    let workout = new WorkoutModel({})
    WorkoutModel.create(workout)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            console.log("error")
            res.send(err)
        })
});

app.put("/api/workouts/:id", (req, res) => {
    WorkoutModel.findByIdAndUpdate(
        {_id: req.params.id},
        {$push: {exercises: req.body}},
        {new: true}
    )
    .then((dbWorkout) => {
        if (dbWorkout) {
            res.json(dbWorkout)
        } else {
            console.log("error")
            res.send(err)
        }
    })
    .catch(err => {
        console.log("error")
        res.send(err)
    })
});