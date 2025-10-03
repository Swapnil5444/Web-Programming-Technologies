const mysql = require('mysql2');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"myproject"
});

con.connect((error)=>{
    if(error) throw error;
    console.log("Connection done successfully.....");
});

module.exports= con;