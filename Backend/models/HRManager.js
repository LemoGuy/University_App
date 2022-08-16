const mongoose = require('mongoose');
const User = require('./User');



const schema = mongoose.Schema({

});

module.exports = User.discriminator("HRManager", schema);