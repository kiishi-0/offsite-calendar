const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamMemberSchema = new Schema({
    
     
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true,
    },
    subteam: {
        type: String,
        default: null,
        required: false
    }
});

const TeamMember = mongoose.model("TeamMember", TeamMemberSchema);

module.exports = TeamMember;