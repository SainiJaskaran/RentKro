const express= require("express");
const path =require("path");
const app = express();
const route = require("./router");

app.use(express.static(path.join(__dirname,'static')));
app.use(route);
app.listen(3000,()=>{
    console.log("server is runuing")
})