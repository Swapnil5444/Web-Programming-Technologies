const http = require('http');

let server =  http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("Server get Started");
        res.end();
    }else if(req.url=="/mobile"){
        res.write("Your request is for mobile.");
        res.end();
    }else if(req.url=="/Laptop"){
        res.write("Your request is for laptop.");
        res.end();
    }
});

server.listen(9999,()=>{
    console.log("Server created Successfully");
});
