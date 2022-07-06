const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router()
const studentDb = require('../module/dbStudent')
const bcrypt = require('bcrypt');

router.post ('/register',(req,res) =>{

        

    const studentSchema = new studentDb({
      

        userName: req.body.userName,
        email:req.body.email,
        password:req.body.password
    });

    studentSchema.save()
    .then(data => {
     res.json(data);
     console.log("Successfully User added!")
    })
    .catch(e => res.json({message: e}))
    

});

router.get('/', (req,res) => {
    studentDb.find()
     .then(data =>{
         res.json(data)
     })
     .catch(e =>
         res.json({message: e}));
 })
 router.delete('/delete/:id', (req,res) => {
    studentDb.deleteOne({_id: req.params.id})
        .then(data =>{
            res.json(data)
        })

        .catch(e =>
            res.json({message: e}));
})


router.patch('/edit/:id', (req,res) => {
    studentDb.updateOne ({_id: req.params.id},
        {
            $set: 
            {
                userName:req.body.userName,
                email:req.body.email,
                password:req.body.password
            }
        })
        .then(data =>{
            res.json(data)
        })
        .catch(e =>
            res.json({message: e}));
})

module.exports = router