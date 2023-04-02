const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
 
mongoose.connect("mongodb://localhost:27017/offsite-calendar",{ useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: "majority" } })
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
app.post("/team/new/multiple", async (req, res)=>{
  req.body.members.forEach (async member  => {
    const team = new TeamMember({
      firstname: member.firstname,
      lastname: member.lastname,
      team: member.team,
      subteam: member.subteam
    })

    await team.save();
  });
  res.json(req.body.members);
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

app.post("/offsite/new/multiple", async (req, res)=>{

  req.body.members.forEach( async member =>{
    const offsite = new Offsite({
        firstname: member.firstname,
        lastname: member.lastname,
        team: member.team,
        day: member.day
    })

    await offsite.save();

    res.json(offsite);
  })
    
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
app.post("/onsite/new/multiple", async (req, res)=>{
  req.body.members.forEach( async member =>{
    const onsite = new Onsite({
        firstname: member.firstname,
        lastname: member.lastname,
        team: member.team,
        day: member.day
    })

    await onsite.save();

    res.json(onsite);
  })
});

app.get("/getTeam/:team", async(req, res)=>{
    const team = req.params.team;
    try {
      const doc = await TeamMember.find({ team: team });
      res.send(doc);
    } catch (err) {
      res.send(err)
    }
})

app.get("/offsite/:team", async (req, res)=>{
  const team = req.params.team;
  try {
    const doc = await Offsite.findOne({ team: team });
    res.send(doc);
  } catch (err) {
    res.send(err)
  }
 
})
app.get("/onsite/:team", async (req, res)=>{
    const team = req.params.team;

    try {
      const doc = await Onsite.findOne({ team: team });
      res.send(doc);
    } catch (err) {
      res.send(err)
    }
});

app.listen(3003, ()=>{
    console.log("Server started on port 3003")
}) 