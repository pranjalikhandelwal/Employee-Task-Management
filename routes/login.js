const express=require('express')
const router=express.Router()
const app=express()
const bcrypt = require('bcrypt');
var {Employee}=require('../model/schema')
var cookieParser = require('cookie-parser')

app.use(cookieParser())

router.get('/',function(req,res){
//   Check Cookie 
    if(req.cookies.userDetail){
        res.render('login', { title: 'Login', isCookie: req.cookies.userDetail})
    }else{
        res.render('login', { title: 'Login', isCookie:false })
    }
    
})

router.post('/',async function(req,res){
    let userid=req.body.userid
    let password=req.body.password
    try{
        let checkUserId = await Employee.findOne({ userid })
        // Check bcrypt Password
        let checkPassword = await bcrypt.compare(password, checkUserId.password)
        
        if (checkPassword) {
            // Create Session
            let id = checkUserId.id
            let name = checkUserId.fullname.split(' ')
            req.session.currentUser = { id, name }
        
            let users={userid:checkUserId.userid,
                            password:req.body.password
                        }
            //  Set Cookie
            res.cookie('userDetail',users).redirect('/task')
        }
        else {
            res.redirect('/registration')
        }
    }
        
    catch(error){
        console.log(error);
        res.redirect('/login')
    }
        
    
})

module.exports=router