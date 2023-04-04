const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OffsiteSchema = new Schema({
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
    subteam:{
        type: String,
        required: false,
        default: null
    },
    day: {
        type: String,
        required: true
    }
});

const Offsite = mongoose.model("Offsite", OffsiteSchema);

module.exports = Offsite;