const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EditTextSchema = new Schema({
    letters:{
        type:String,
        required:true
    },
    numbs:{
        type:String,
        required:true
    },
    upletters:{
        type:String,
        required:true,
        uppercase:true
    },
    lowletters:{
        type:String,
        required:true,
        lowercase:true
    },
    sinletters:{
        type:String,
        required:true
    },
    descriptiveText:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        default:50
    }
})

module.exports = EditText = mongoose.model('edittext',EditTextSchema);