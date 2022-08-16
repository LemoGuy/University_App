const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    department: { type: String, required: true },
    year: { type: Number, required: true },
    semester: { type: String, required: true },
    section: { type: String, required: true },
    active: { type: Boolean, required: true },
    finalized: { type: Boolean, required: true },

    assignments: { type: [
        new mongoose.Schema({
            type: String,
            weight: Number,
            name: String,
            date: { type: Date, default: Date.now }
        })
    ], default: Array },

    sessions: { type: [
        new mongoose.Schema({
            type: String,
            duration: Number,
            title: String,
            room: String,
            date: { type: Date, default: Date.now }
        })
    ], default: Array }

});

// TODO!! Semestral course

module.exports = mongoose.model('Course', schema);
