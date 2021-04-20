const express = require('express')
const router = express.Router()
var { Country,State ,City} = require('../model/schema')


// Get all the Country  API - country/
router.get('/', function (req, res) {
    console.log(`***********get all country ****************`);
    Country.find({}).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

// Get all the State  API - country/:countryID
router.get('/:countryID', function (req, res) {
    console.log(`***********Get States****************`);
    State.find({ countryId: req.params.countryID }).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.status(400).send(error)
    })
})


// Get City  API - country/cities/:stateID
router.get('/cities/:stateID', function (req, res) {
    console.log(`***********Get City ****************`);
    City.find({ stateId: req.params.stateID }).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.status(400).send(error)
    })
})



// router.get('/:countryName-:stateName-:cityName', function (req, res) {
//     console.log(`***********Test ****************`);
//     console.log(req.params);
//     res.send(req.params)
// })

module.exports=router