require("dotenv").config();
const http = require('http');
const fs = require('fs');

const host = process.env.HOST;
const port = process.env.PORT;

let server =  http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"});
        let streamRead= fs.createReadStream(__dirname+"/index.html","utf-8");
        streamRead.pipe(res);
    }else if(req.url=="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        let streamRead= fs.createReadStream(__dirname+"/about.html","utf-8");
        streamRead.pipe(res);
    }else if(req.url=="/service"){
         res.writeHead(200,{"content-type":"text/html"});
        let streamRead= fs.createReadStream(__dirname+"/service.html","utf-8");
        streamRead.pipe(res);
    }else if(req.url=="/gallery"){
         res.writeHead(200,{"content-type":"text/html"});
        let streamRead= fs.createReadStream(__dirname+"/gallery.html","utf-8");
        streamRead.pipe(res);
    }
});

server.listen(port ,()=>{
    console.log(`Server created Successfully,${host}${port}`);
});
