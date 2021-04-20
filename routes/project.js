const express = require('express')
const router = express.Router()
const { Employee } = require('../model/schema')
var multer = require('multer')
let path = require('path')
let isAuth=require('./auth')

var storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var uploadProjectPhoto = multer({ storage: storage }).single('project_photo')

// Show Project add form
router.get('/', isAuth, function (req, res) {
    res.render('project', { title: 'Add Project', sess: req.session.currentUser.name[0] })
})

// Add new active project into project list
router.post('/', isAuth, uploadProjectPhoto, function (req, res) {
    let { project_title, project_type, project_date,project_detail, project_tech } = req.body
    let project_photo = req.file.filename
    // Updated Existing Project List
    Employee.updateOne({ _id: req.session.currentUser.id }, {
        $push: {
            projectsList: { project_title, project_type, project_date, project_detail, project_tech, project_photo }
        }
    }, function (err, result) {
        if (err) throw err
        res.redirect('/project')
    })
})

// Show active or deactive projects
router.get('/:projecttype', isAuth, async function (req, res) {
    let projecttype=req.params.projecttype
    let getProjects = await Employee.findOne({ _id: req.session.currentUser.id })
    let activeProjectsList = await getProjects.projectsList.filter(function (project) {
        return project.isProjectActive
    })
    let deactiveProjectsList = await getProjects.projectsList.filter(function (project) {
        return !project.isProjectActive
    })
    
    if (projecttype =='activeproject'){
        // Render All Active Project list
        res.render('allproject', { title: 'Active Projects', projectDetails: activeProjectsList, sess: req.session.currentUser.name[0] })
    }else{
      // Render All Deactive Project list
        res.render('allproject', { title: 'Deactive Projects', projectDetails: deactiveProjectsList, sess: req.session.currentUser.name[0] })
    }  

})

// Change Project status in active Project List 
router.get('/deactive/:id', isAuth, async function (req, res) {
    let objectId = req.params.id
    // Change project status false
    await Employee.updateOne({
        _id: req.session.req.session.currentUser.id,
        "projectsList._id": objectId
    } ,
        { $set: { "projectsList.$.isProjectActive": false } }
    )
    res.redirect('/project/allproject')    

})

module.exports = router;