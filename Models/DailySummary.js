const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailySummarySchema = new Schema({

    addedDate:{
        type:String,
        required:true
    },
    addedTime:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    }

})

module.exports = DailySummary = mongoose.model('dailysummary',DailySummarySchema);