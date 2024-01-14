const express = require("express");
const app = express();
const fs = require("fs");
const multer = require('multer');
const {TesseractWorker} = require("tesseract.js")
const worker = new TesseractWorker();

const storage = multer.diskStorage({
    destination: (req,file ,cb)=>{
        cb(null, "./uploads")
    },
    filename: (req,res,cb)=>{
        cb(null, req.file)
    }
})
const upload = multer ({storage: storage}).single("avatar");
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.render("index"); 
})

app.post("/upload",(req,res)=>{
    upload(req,res,err =>{
        console.log(req.file)
    })
})


const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=> console.log(`working on port ${PORT}`))