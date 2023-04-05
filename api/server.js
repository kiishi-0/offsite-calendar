const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = express.Router();
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

app.get('/subteams', async (req, res) => {
  try {
    const subteams = await TeamMember.distinct('subteam');
    res.json(subteams);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.get('/subteams/:team', async (req, res) => {
  const { team } = req.params;
  try {
    const subteams = await TeamMember.find({ team }).distinct('subteam');
    res.status(200).json({ subteams });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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

// app.post("/offsite/new/multiple", async (req, res)=>{

//   req.body.members.forEach( async member =>{
//     const offsite = new Offsite({
//         firstname: member.firstname,
//         lastname: member.lastname,
//         team: member.team,
//         day: member.day
//     })

//     await offsite.save();

//     res.json(offsite);
//   })
    
// });

app.post("/offsite/new/multiple", async (req, res) => {
  const members = req.body.members;
  const newMembers = [];

  // Loop through each member in the request body
  for (let member of members) {
    // Check if a member with the same first and last name already exists in the database
    const existingMember = await Offsite.findOne({
      firstname: member.firstname,
      lastname: member.lastname,
      team: member.team,
      subteam: member.subteam,
      day: member.day,
    });

    // If the member doesn't exist, create a new Offsite document and save it
    if (!existingMember) {
      const offsite = new Offsite({
        firstname: member.firstname,
        lastname: member.lastname,
        team: member.team,
        subteam: member.subteam,
        day: member.day,
      });

      const savedOffsite = await offsite.save();
      newMembers.push(savedOffsite);
    }
  }

  // Return the new members that were added to the database
  res.json(newMembers);
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
    const doc = await Offsite.find({ team: team });
    res.send(doc);
  } catch (err) {
    res.send(err)
  }
 
})
app.get("/onsite/:team", async (req, res)=>{
    const team = req.params.team;

    try {
      const doc = await Onsite.find({ team: team });
      res.send(doc);
    } catch (err) {
      res.send(err)
    }
});

app.listen(3003, ()=>{
    console.log("Server started on port 3003")
}) 