const express = require("express");
const app = express();
require("./db/conn2");
const Student = require("./models/students2")
const mongoose = require("mongoose");
const port = 5555;
app.use(express.json());

app.post("/", async(req,res) => {
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(e){ res.status(400).send(e);}
})

app.get("/", async(req,res) => {
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