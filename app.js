const express=require("express");
const app=express();
app.use(express.static(__dirname+"/public"));
app.get("/",function(req,res){
   res.sendFile(__dirname+"/Homepage.html");
});
app.get("/signup.html",function(req,res){
res.sendFile(__dirname+"/signup.html")
});
app.get("/farmer.html",function(req,res){
    res.sendFile(__dirname+"/farmer.html");
});
app.get("/customer.html",function(req,res){
    res.sendFile(__dirname+"/customer.html");
});
app.get("/business.html",function(req,res){
    res.sendFile(__dirname+"/business.html");
});
app.get("/student.html",function(req,res){
    res.sendFile(__dirname+"/student.html");
});
app.get("/login.html",function(req,res){
    res.sendFile(__dirname+"/login.html");
});
app.listen(3000,function(){
    console.log("hey my server is running");
});