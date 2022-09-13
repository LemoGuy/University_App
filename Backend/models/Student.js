const mongoose = require('mongoose');
const User = require('../models/User')


const schema = new mongoose.Schema({

    nameOfHighSchool: { type: String, required: true },
    prepSchool: { type: String, required: true },
    registrationType: { type: String, required: true },
    department: { type: String, required: true },
    year: { type: Number, required: true },
    semester: { type: String, required: true },
    
    assignments: { type: [
        new mongoose.Schema({
            courseCode: String,
            type: String,
            weight: Number,
            name: String,
            date: { type: Date, default: Date.now }
        })
    ], default: Array },

    sessions: { type: [
        new mongoose.Schema({
            courseCode: String,
            type: String,
            duration: Number,
            title: String,
            room: String,
            date: { type: Date, default: Date.now }
        })
    ], default: Array }, 

    takenCourses: { type: [mongoose.Types.ObjectId], default: Array}


});

module.exports = User.discriminator("Student", schema);


