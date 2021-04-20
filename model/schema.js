const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true })

let employeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: [3, 'Name Should be Contain 3 Character'],
        required: [true, 'Name Should be Required']
    },
    userid: {
        type: String,
        minLength: [3, 'UserID Should be Contain 3 Character'],
        required: [true, 'User Id Should be Required'],
        unique:true
    },
    password:
    {
        type: String,
        minLength: [5, 'Password Should be 5 Character long'],
        required: [true, 'Password Should be Required']
    },
    department: String,
    country:String,
    state:String,
    city:String,
    tasks: [
        {
            date: { type: Date, default: Date.now },
            task_title: String,
            isTaskActive:{
                type:Boolean,
                default:true
            },
            task_completed_date: { type: Date, default: Date.now}
        }
    ],
    projectsList: [
        {
            project_title: String,
            project_type: String,
            project_date: { type: Date, default: Date.now },
            project_detail:String,
            project_tech:String,
            project_photo:String,
            isProjectActive:{
                type:Boolean,
                default:true
            }

        }
    ]
})
// true for active
// false for deactive project
let countrySchema=mongoose.Schema({
    countryName:String,
})
let stateSchema=mongoose.Schema({
    stateName:String,
    countryId:String
})
let citySchema = mongoose.Schema({
    cityName: String,
    stateId: String
})

employeeSchema.statics.hasEmail=async function(email,cb){
    await this.find({ userid: email },cb)
}

let Employee = new mongoose.model('employee', employeeSchema)
let Country = new mongoose.model('countries', countrySchema)
let State=new mongoose.model('states',stateSchema)
let City=new mongoose.model('city',citySchema)

module.exports = { Employee, Country, State, City }

