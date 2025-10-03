const fs = require('fs');

fs.writeFile("./writeAsyn.txt","Hello Friends",(error,result)=>{
    console.log("File write successfully.");
});

fs.readFile("./writeAsyn.txt","utf8",(error,result)=>{
    console.log("File read successfully:"+result);
});

fs.appendFile("./writeAsyn.txt","You all are my best friends",(error,result)=>{
    console.log("Data Appended:"+result);
});


fs.readFile("./writeAsyn.txt","utf8",(error,result)=>{
    fs.writeFile("./writeAsyn2.txt",result,(error,result)=>{
        fs.appendFile("./writeAsyn2.txt","Be Happy",(err,result)=>{});
    });
})

fs.unlink("./writeAsyn.txt",()=>{});

