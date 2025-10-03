const fs = require('fs');

//write file Synchronously
let filewrite=fs.writeFileSync("./writefile1.txt","my first msg");

//read file Synchronously
let fileread=fs.readFileSync("./writefile1.txt","utf8");
console.log(fileread);

fs.appendFileSync("./writefile1.txt","this is my second message");