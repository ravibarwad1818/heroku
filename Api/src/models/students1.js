const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentFirstName : {
        type:String
    },
    collegeName : {
        type:String
    },
    location:{
        type:String
    }
})

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;