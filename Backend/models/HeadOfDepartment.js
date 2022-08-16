const mongoose = require('mongoose');
const User = require('./User');



const schema = mongoose.Schema({
    department: { type: String, required: true },
    assignedCourses: { type: [mongoose.Types.ObjectId], default: Array}


});

module.exports = User.discriminator("HeadOfDepartment", schema);