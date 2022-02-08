var express = require('express');
const departments = require('./Models/departments');
var router = express.Router();


//to fetch data
router.get('/departments',async(req,res)=>{
    const idata = await departments.find()
    res.send(idata)
})

//to add the data
router.post("/departments",async(req,res)=>{
    const idata = new departments({
        name:req.body.name,
        hod:req.body.hod
    })

    await idata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating data

router.patch('/departments/:id',async (req,res)=>{
    const idata = await departments.findOne({_id:req.params.id})
    idata.name = req.body.name
    idata.hod = req.body.hod
    await idata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api data
router.delete("/departments/:id",async(req,res)=>{
    const _id = req.params.id;
    const data = await departments.findByIdAndDelete(_id)
    res.send(data);
})

module.exports = router 