const express = require("express");
const router = express.Router();
const EditText = require('../../Models/EditText');

router.post('/add',(req,res)=>{
    
  console.log(req.body);

  const frmData = {
      letters: req.body.letters,
      numbs: req.body.numbs,
      upletters: req.body.upletters,
      lowletters: req.body.lowletters,
      sinletters:req.body.sinletters,
      descriptiveText:req.body.descriptiveText
  };

  EditText.create(frmData)
  .then(()=>{
      res.status(200).json({'message':'Added Successfully'})
  })
  .catch(err => {
    res.status(400).json({ 'error': err });
  });
  

})


router.patch('/updatetext/:_id',async (req,res)=>{
   
    try{
        console.log('Request Params of Id edit text : ', req.params._id);
        
        let newData = await EditText.findOne({_id:req.params._id})
       
        if(!newData){

            res.status(404).json({'message':'Invalid Id'});
            
        }else{

            newData.letters = req.body.letters
            newData.numbs = req.body.numbs
            newData.upletters = req.body.upletters
            newData.lowletters = req.body.lowletters
            newData.sinletters = req.body.sinletters
            newData.descriptiveText = req.body.descriptiveText
    
            await newData.save();
            res.status(200).json(newData);
        }


    }catch(err){
        res.status(500).json({'err':'Server Error'});
    }

  });

router.get('/viewtext/',async (req,res)=>{
    try{
        let textData = await EditText.find();
        res.status(200).json(textData);
    }catch(err){
        res.status(500).json({'err':'Server Error'});
    }


});



router.patch('/updatefont/:_id',async (req,res)=>{
    
    try{
        console.log('Request Params of Id update font : ', req.params._id);
        console.log('Request Body edit text : ', req.body);
        let newData = await EditText.findOne({_id:req.params._id})
       
        if(!newData){
            res.status(404).json({'message':'Invalid Id'});    
        }else{
            newData.size = req.body.size
            await newData.save();
            res.status(200).json(newData);
        }

    }catch(err){
        res.status(500).json({'err':'Server Error1'});
        console.log(err)
    }

})
module.exports = router;