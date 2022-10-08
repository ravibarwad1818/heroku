const express = require("express");
const app = express();
require("./db/conn1");
const Student = require("./models/students1")
const mongoose = require("mongoose");
const port = 5555;
app.use(express.json());

app.post("/students", async(req,res) => {
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(e){ res.status(400).send(e);}
})

app.get("/students", async(req,res) => {
    try{
        const studentsData = await Student.find();
        console.log(studentsData);
        res.send(studentsData);
    }
    catch(e){
        res.send(e);
    }
})


app.listen(port, ()=> {
    console.log("Connection is setup at " + port );
})