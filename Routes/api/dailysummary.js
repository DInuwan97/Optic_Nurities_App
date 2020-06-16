const express = require("express");
const router = express.Router();
const DailySummary = require('../../Models/DailySummary');


router.post('/adddailysummary/',(req,res)=>{

    console.log(req.body);

    const frmData = {
        addedDate: req.body.addedDate,
        addedTime:req.body.addedTime,
        size:req.body.size
    };
  
    DailySummary.create(frmData)
    .then(()=>{
        res.status(200).json({'message':'Added Successfully'})
    })
    .catch(err => {
      res.status(400).json({ 'error': err });
    });
});

module.exports = router;