const express = require('express')
const router = express.Router()
const { Employee } = require('../model/schema')
let isAuth = require('./auth')

// Get - /task/
router.get('/', isAuth,async function (req, res) {

    
    let getActiveTasks = await Employee.findOne({ _id: req.session.currentUser.id })
    let activeTaskList = await getActiveTasks.tasks.filter(function (task) {
        return task.isTaskActive
    })
    res.render('task', {
        title: 'Task', allTask: activeTaskList,
                 sess: req.session.currentUser.name[0]})
})

// get - /task/ add new task
router.get('/addtask/:task_title', isAuth, function (req, res) {
    let task_title = req.params.task_title

    Employee.updateOne({ _id: req.session.currentUser.id },
        {
            $push: { tasks: { task_title } }
        },
        function (err, result) {
            if (err) throw err
            res.redirect('/task')
        })
})

//Get-    / task / delete
router.get('/delete/:taskid', isAuth, async function (req, res) {
    let task_id = req.params.taskid
    
   await Employee.update({
        _id: req.session.currentUser.id,
        "tasks._id": task_id
    },
       { $set: { "tasks.$.isTaskActive": false, 
       "tasks.$.task_completed_date":Date.now()} }
    )

     res.redirect('/task')
})


// Get - /task/history
router.get('/history', isAuth,async function (req, res) {
    let getActiveTasks = await Employee.findOne({ _id: req.session.currentUser.id })
    let deactiveTaskList = await getActiveTasks.tasks.filter(function (task) {
        return !task.isTaskActive
    })
    res.render('task_history', {
        title: 'Task History', taskDetails: deactiveTaskList,
        sess: req.session.currentUser.name[0] })
})

module.exports = router
