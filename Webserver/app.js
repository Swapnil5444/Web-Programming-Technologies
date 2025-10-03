require("dotenv").config();
const path = require("path");
const express = require("express");
const hbs =require('hbs');
const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

const publicPath = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");


app.use(express.static(publicPath));

app.set('view engine','hbs');
app.set('views',viewsPath);

app.get("/", (req, res, next) => {
  // res.sendFile(__dirname+ "/public/html/index.html");
  res.render("index",{developer:"Swapnil Rathod",post:"Data Analytics",title:"Home"})
});

app.get("/about", (req, res, next) => {
 //res.sendFile(__dirname+ "/public/html/about.html");
  res.render("about",{developer:"Sumit Dhamane",post:"Full Stack Developer",title:"About"})
});

app.get("/service", (req, res, next) => {
  //res.sendFile(__dirname+ "/public/html/service.html");
  res.render("service",{developer:"Aachal Gaikar",post:"MBBS",title:"Service"})
});

app.get("/gallery", (req, res, next) => {
 //res.sendFile(__dirname+ "/public/html/gallery.html");
 res.render("gallery",{developer:"Soniya Shah",post:"Charter Accountant",title:"Gallery"})
});

app.get(/.*/, (req, res, next) => {
 //res.sendFile(__dirname+ "/public/html/404.html");
 res.render("404",{developer:"Shravani Kulkarni",post:"Director",title:"Kalwa"})
});


app.listen(port, () => {
  console.log(`server get started ${host}${port}`);
});