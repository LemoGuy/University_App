const mongoose = require('mongoose');

// TODO!! ADD: photo, contact info, highschool info, 

const schema = new mongoose.Schema({
    name: { 
        type: [String], 
        required: true 
    },

    fatherName: { 
        type: String, 
        required: true 
    },

    motherName: { 
        type: String, 
        required: true 
    },

    phone1: { 
        type: Number, 
        required: true 
    },

    phone2: { 
        type: Number, 
        required: true 
    },

    address: { 
        type: String, 
        required: true 
    },

    country: { 
        type: String, 
        required: true 
    },

    citizenship: { 
        type: String, 
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

    maritialStatus: { 
        type: String, 
        required: true 
    },

    bloodType: { 
        type: String, 
        required: true 
    },

    religion: { 
        type: String, 
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
