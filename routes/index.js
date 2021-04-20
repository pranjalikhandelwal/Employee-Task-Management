var express = require('express');
var router = express.Router();
var about=require('./about')
var task=require('./task')
var project=require('./project')
var registration=require('./registration')
var login=require('./login')
var country = require('./country')
var projectsnap=require('./projectsnap')
var sendmail=require('./sendmail')
var changepassword=require('./changepassword')


router.use('/about',about)
router.use('/task',task)
router.use('/project',project)
router.use('/registration',registration)
router.use('/login',login)
router.use('/country', country)
router.use('/projectsnap',projectsnap)
router.use('/sendmail',sendmail)
router.use('/changepassword', changepassword)

/* GET home page. */
router.get('/', function(req, res) {
  res.render('about', { title: 'About' });
});

router.get('/logout',function(req,res){
  req.session.destroy(()=>{
    res.redirect('/login')
  })
})

module.exports = router;
