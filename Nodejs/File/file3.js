const fs = require('fs');

fs.mkdir("./NewDir",(error,result)=>{});

// fs.rmdir("./NewDir",(error,result)=>{});

fs.mkdir("./NewDir",(error,result)=>{
    fs.writeFile("./NewDir/newfile.txt","Hello Friends",(error,result)=>{});
});

const dirPathd = "./NewDir";


fs.rm(dirPathd, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error("Error deleting directory:", err);
  } else {
    console.log("Directory deleted successfully!");
  }
});




// Path of directory to delete
// const dirPath = "./testDir";

// fs.rm(dirPath, { recursive: true, force: true }, (err) => {
//   if (err) {
//     console.error("Error deleting directory:", err);
//   } else {
//     console.log("Directory deleted successfully!");
//   }
// });
