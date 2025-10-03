require('dotenv').config();
const express=require('express')


const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

app.get("/index",(req,res,next)=>{
    //res.send("404.......PAge not found");
    res.sendFile(__dirname+"/index.html");
});

app.get("/about",(req,res,next)=>{
    //res.send("404.......PAge not found");
    res.sendFile(__dirname+"/about.html");
});

app.get("/service",(req,res,next)=>{
    //res.send("404.......PAge not found");
    res.sendFile(__dirname+"/service.html");
});

app.get("/gallery",(req,res,next)=>{
    //res.send("404.......PAge not found");
    res.sendFile(__dirname+"/gallery.html");
});

app.get(/.*/,(req,res,next)=>{
    //res.send("404.......PAge not found");
    res.sendFile(__dirname+"/404.html");
});

app.listen(port,()=>{
    console.log(`Server get statedon ${host}:${port}`);
})