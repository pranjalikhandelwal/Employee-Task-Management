const express = require('express')
const router = express.Router()
const { Employee } = require('../model/schema')
let isAuth = require('./auth')


router.get('/',isAuth,function(req,res){
    Employee.findOne({ _id: req.session.currentUser.id }, function (err, allproject) {
        if (err) throw err
        res.render('projectsnap', { title: 'All Projects', projectDetails: allproject.projectsList, sess: req.session.currentUser.name[0] })
    })
})

router.get('/:projectid',isAuth,async function(req,res){
    let projectid=req.params.projectid
    let projectDetail=await Employee.findOne({_id:req.session.currentUser.id},
        { projectsList: { $elemMatch: { _id: projectid } } })
    // res.json(projectDetail)
    res.render('projectdetail', { title: 'Project Detail', project: projectDetail.projectsList[0], sess: req.session.currentUser.name[0] })
})
module.exports=router