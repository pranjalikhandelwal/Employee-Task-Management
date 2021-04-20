require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
var { Employee} = require('../model/schema')
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const { check, validationResult  } = require('express-validator');

// Api- get email id
router.get('/',function(req,res){
    console.log('in change pass******* ',process.env.EMAIL_PASSWORD);
    res.render('getEmail', { title: 'Change Passwordss' })
})

// send jwt Token to mail id
router.post('/sendemail',async function(req,res){
    let email = req.body.email
    console.log(email);
try{
   await Employee.hasEmail(email,async function (err, result) {
       if(err) console.log(err);
       let privateString = result[0]._id
       let token = await jwt.sign({ id: privateString }, 'privateString');
     
   // Send mail to link for verify
       var transporter =await nodemailer.createTransport({
           service: 'gmail',
           auth: {
               user: process.env.EMAIL_ID,
               pass: process.env.EMAIL_PASSWORD
           }
       });
       var mailOptions = {
           from: process.env.EMAIL_ID,
           to: email,
           subject: 'Password Changed Link',
           html: `<p>Click This Link http://localhost:3000/changepassword/${token}</p>`
       };

      await transporter.sendMail(mailOptions);
       
       res.send('Change Password link send to your email id kindly check it <a href="http://www.gmail.com">Click Here</a>')
    })
    
    }
catch (error) {
    console.log(error);
}
   
})

// Check JWT Token
router.get('/:tokenid',function(req,res){
    let token = req.params.tokenid
    var decoded = jwt.verify(token, 'privateString');
    
    Employee.findOne({ _id:decoded.id},function(err,result){
      console.log(result.userid);
        if(result){
            res.render('changepassword', { title: 'Change Password', emailid:result.userid,error:false })
        }
        else{
            res.send('Your Id not Vaild')
        }
    })

})

// Change password 
router.post('/',[
    check('password').custom((value, { req }) => {
        if (value !== req.body.cpassword) {
            throw new Error('Password confirmation is incorrect');
        }
        return true
    })
],async function(req,res){
    let errors=validationResult(req)
    console.log(`**********CHangE Pass Post method********`);

    if (errors.errors.length){
        console.log('error part');
        res.render('changepassword', { title: 'Change Password', emailid:req.body.email, 
                              error: errors.array()[0] })
    }

    else{
        // Bcrypt Password 
        console.log('in else block');
        let hashPassword = await bcrypt.hash(req.body.password, 12)
       await Employee.updateOne({ userid: req.body.email }, { password: hashPassword }, function (err, result) {
            if (err) throw err
            console.log(`password change`);
            console.log(result);
            res.send('Password Is Successfully Changed Please <a href="/login">Login</a>')
        })

    }

})

// API -  changepassword/hasEmail/:email  
// Validate Email Id
router.get('/hasEmail/:email',function(req,res){
    let email=req.params.email

   // Check Email Valid or not
    Employee.hasEmail(email, function (err, result) {
        res.json(result.length)
    })

})

module.exports=router