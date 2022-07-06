const mongoose = require('mongoose')

const studentSchema  = mongoose.Schema({
    userName:{
        type: String,
        required: true

    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('studentManagement',studentSchema)