const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const body_parser = require("body-parser");
router.use(body_parser.urlencoded({extended:true}));
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
router.get("/index.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
router.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'))
})
router.get("/contact.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))
})
router.get("/cars.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'cars.html'))
})
router.get("/sedan.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'sedan.html'))
})
router.get("/hatch.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'hatch.html'))
})
router.get("/suv.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'suv.html'))
})
router.get("/payment.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'payment.html'))
})
router.get("/luxury.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'luxury.html'))
})
mongoose.connect('mongodb://localhost:27017/prodata');
const Scema = new mongoose.Schema({
   name:String,
   email:String,
   password:String,
})
const Model = mongoose.model('user',Scema);
router.post("/signup",(req,res)=>{
    const{name,email,password} = req.body;
    console.log(req.body);
    const data = new Model({name,email,password})
    data.save()
    res.redirect('/data');
    
})
router.get("/data",(req,res)=>{
    let flg=false;
    Model.find().then(data=>{
        console.log(data)
    });
    res.redirect("/login.html")
})

router.post("/login",(req,res)=>{
    const{email,password} = req.body;
    console.log(email);
    console.log(req.body)
    let cnt = 0;
    Model.find().then(data=>{
        data.forEach(element => {
         if(element.email===email&&element.password===password){
            cnt = 1;
         }
         
        });
        if(cnt===0){
            res.send("wrong data");
         }
         else{
            res.redirect('/index.html');
         }
        
     })
    
     
    
})
module.exports = router;


