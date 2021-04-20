const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
var { Employee,Country} = require('../model/schema')

router.get('/', function (req, res) {
    Country.find(function(err,result){
        if(err) throw err
        res.render('registration', { title: 'Registration', error: false, Countries:result})
    })
    
    
})

router.post('/', async function (req, res) {
    let countries = await Country.find()
    let error = new Employee(req.body).validateSync()
    // Validation Error
    if (error) {
        console.log(`erorr***** ${error}`);
        res.render('registration', { title: 'Registration', error: error.errors, Countries: countries })
    }
    else {
        // Change password into Hash Code
        let hashPassword = await bcrypt.hash(req.body.password, 12)
        req.body.password = hashPassword
        // Save Data Into Data Base
        new Employee(req.body).save(function (err, saveData) {
            if (err) {

                if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate Userid send Error
                    res.render('registration', { title: 'Registration', error: { userid: 'User ID already exists' }, Countries: countries})
                }
            }

            else {
                // Create Session
                let id=saveData.id
                let name = saveData.fullname.split(' ')

                req.session.currentUser = {id,name}
                res.redirect('/task')
            }
        })

    }
})

module.exports = router;
