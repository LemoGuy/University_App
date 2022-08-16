const mongoose = require('mongoose');

// TODO!! ADD: photo, contact info, highschool info, 

const schema = new mongoose.Schema({
    name: { 
        type: [String], 
        required: true 
    },

    gender: { 
        type: String, 
        required: true 
    },

    birthdate: { 
        type: Date, 
        required: true 
    },
    
    username: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
   
    email: {
        required: true,
        type: String
    },

    status: { 
        type: String, 
        required: true 
    },

    userCreationDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', schema);
