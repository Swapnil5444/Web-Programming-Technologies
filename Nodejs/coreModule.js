const path =  require('path');
const os = require('os');
console.log(__dirname);
console.log(__filename);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__filename));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('../'+__filename));
console.log(path.join('myNewDir',__dirname));

console.log("================");

console.log(os.arch());
console.log(os.type());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());