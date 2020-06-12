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
        lowercase:true
    },
    lowletters:{
        type:String,
        required:true
    },
    sinletters:{
        type:String,
        required:true
    },
    descriptiveText:{
        type:String,
        required:true
    }
})

module.exports = EditText = mongoose.model('edittext',EditTextSchema);