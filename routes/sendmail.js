const express = require('express')
var nodemailer = require('nodemailer');
const router = express.Router()
const { Employee } = require('../model/schema')
let isAuth = require('./auth')

// Show Email Send Form
router.get('/',isAuth,async function(req,res){
    console.log(`get method in send mail`);

    let allProjects = await Employee.findOne({ _id: req.session.currentUser.id })
    console.log(allProjects.projectsList);
    res.render('sendmail', { title: 'Send Mail', 
                            sess: req.session.currentUser.name[0],
                            emailsender:allProjects.userid,
                            projectDetails: allProjects.projectsList
                             })

})

// Send mail Based upon Mail id get
router.post('/', isAuth,function(req,res){
 let emailSend=req.body.emailSend
 let emailSubject=req.body.emailSubject
 let emailBody=req.body.emailBody
 console.log('post method in send mail*****************');
console.log(emailSend,emailSubject,emailBody);

       var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pranjuk464@gmail.com',
            pass: 'bhgtnajykrozwuba'
        }
    });

    var mailOptions = {
        from: 'pranjuk464@gmail.com',
        to: emailSend,
        subject: emailSubject,
        text: emailBody
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).redirect('/sendmail')
        }
    });


})

module.exports=router