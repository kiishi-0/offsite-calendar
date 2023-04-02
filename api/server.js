const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
 
mongoose.connect("mongodb://localhost:27017/offsite-calendar",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to DB"))
.catch(console.log(console.error));

const TeamMember = require('./Models/TeamMember')
const Offsite = require('./Models/Offsite')
const Onsite = require('./Models/Onsite'); 

app.post("/team/new", async (req, res)=>{
    const team = new TeamMember({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        team: req.body.team,
        subteam: req.body.subteam
    })

    await team.save();

    res.json(team);
});
app.post("/offsite/new", async (req, res)=>{
    const offsite = new Offsite({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        team: req.body.team,
        day: req.body.day
    })

    await offsite.save();

    res.json(offsite);
});
app.post("/onsite/new", async (req, res)=>{
    const onsite = new Onsite({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        team: req.body.team,
        day: req.body.day
    })

    await onsite.save();

    res.json(onsite);
});

app.get("/getTeam/:team", (req, res)=>{
    const team = req.params.team;

  TeamMember.findOne({ team: team }, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error getting element');
    } else if (!result) {
      res.status(404).send('Element not found');
    } else {
      res.send(result);
    }
  });
})

app.get("/offsite/:team", (req, res)=>{
    const team = req.params.team;

  Offsite.findOne({ team: team }, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error getting element');
    } else if (!result) {
      res.status(404).send('Element not found');
    } else {
      res.send(result);
    }
  });
})
app.get("/onsite/:team", (req, res)=>{
    const team = req.params.team;

  Onsite.findOne({ team: team }, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error getting element');
    } else if (!result) {
      res.status(404).send('Element not found');
    } else {
      res.send(result);
    }
  });
});

app.listen(3003, ()=>{
    console.log("Server started on port 3003")
}) 