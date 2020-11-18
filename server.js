const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path")
let WorkoutModel = require("./models/Workout.js")
const db = require("./models");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {useNewUrlParser: true}, { useUnifiedTopology: true });

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/index.html"))
// });

// app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/exercise.html"))
// });

// app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname + "/public/stats.html"))
// });

// app.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//         .then(dbWorkout => {
//             res.json(dbWorkout)
//         })
//         .catch(err => {
//             console.log("error")
//             res.send(err)
//         })
// });

// app.get("/api/workouts/range", (req, res) => {
//     db.Workout.find().sort({day: -1}).limit(7)
//     .then(dbWorkout => {
//         res.json(dbWorkout)
//     })
//     .catch(err => {
//         console.log("error")
//         res.send(err)
//     })

// });

// app.post("/api/workouts", (req, res) => {
//     let workout = new WorkoutModel({})
//     WorkoutModel.create(workout)
//         .then(dbWorkout => {
//             res.json(dbWorkout)
//         })
//         .catch(err => {
//             console.log("error")
//             res.send(err)
//         })
// });

// app.put("/api/workouts/:id", (req, res) => {
//     WorkoutModel.findByIdAndUpdate(
//         {_id: req.params.id},
//         {$push: {exercises: req.body}},
//         {new: true}
//     )
//     .then((dbWorkout) => {
//         if (dbWorkout) {
//             res.json(dbWorkout)
//         } else {
//             console.log("error")
//             res.send(err)
//         }
//     })
//     .catch(err => {
//         console.log("error")
//         res.send(err)
//     })
// });

// app.delete("/api/workouts/:id", (req, res) => {
//     WorkoutModel.findOneAndRemove(
//         {_id: req.params.id}
//     )
//     .then((dbWorkout) => {
//         if (dbWorkout) {
//             res.send("Workout deleted.")
//         } else {
//             console.log("error")
//             res.send(err)
//         }
//     })
//     .catch(err => {
//         console.log("error")
//         res.send(err)
//     })
// });

require("./routes/api-routes.js") (app)
require("./routes/html-routes.js") (app)

app.listen(PORT, () => {
    console.log(` 🌎 App running on port ${PORT}!`)
});