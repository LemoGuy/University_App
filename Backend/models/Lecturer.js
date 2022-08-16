const mongoose = require('mongoose');
const User = require('./User');



const schema = new mongoose.Schema({
    
    department: { type: String, required: true },
    assignedCourses: { type: [mongoose.Types.ObjectId], default: Array}

});


module.exports = User.discriminator("Lecturer", schema);