const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OnsiteSchema = new Schema({
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
    day: {
        type: String,
        required: true
    }
});

const Onsite = mongoose.model("Onsite", OnsiteSchema);

module.exports = Onsite;