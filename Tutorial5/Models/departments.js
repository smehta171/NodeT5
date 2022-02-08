var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:String,
    hod:String
})

module.exports = mongoose.model("departments",schema)