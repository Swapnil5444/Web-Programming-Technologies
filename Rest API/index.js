const con = require('./connection');
const bodyParser = require('body-parser');
//const cors = require('cors');
const express = require('express');
const app = express();

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res,next)=>{
    res.send("Welcome You All In My REST API");
});

app.get("/products",(req,res,next)=>{
    // res.send("this is simple get request for product");
    con.query("SELECT * FROM products",(error,result)=>{
        if(error) throw error;
        console.log(result); 
        res.send(result);
    })
});

app.get("/products/:pid",(req,res,next)=>{
con.query(`SELECT * FROM products WHERE pid=${req.params.pid}`, (error, result) => {
    if (error) throw error;
    console.log(result); 
    res.send(result);
});
})


app.delete("/products/:pid",(req,res,next)=>{
    //  res.send(req.params.id);
    con.query(`DELETE FROM products WHERE pid=${req.params.pid}`,(error,result)=>{
        if(error) throw error;
        res.send(result);
    })
});

app.post("/products", (req, res) => {
    //const { pname, pprice, pcompany, pquantity } = req.body;

    let insertQuery = `INSERT INTO products(pname,pprice,pcompany,pquantity) VALUES(?,?,?,?)`;

    con.query(insertQuery, [pname, pprice, pcompany, pquantity], (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send("Product added successfully");
    });
});




app.put("/products/:pid", (req, res) => {
    const { pid } = req.params;
    const { pname, pprice, pcompany, pquantity } = req.body;

    let updateQuery = `UPDATE products SET pname=?, pprice=?, pcompany=?, pquantity=? WHERE pid=?`;

    con.query(updateQuery, [pname, pprice, pcompany, pquantity, pid], (error, result) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send("Product Updated Successfully");
    });
});


app.listen(1998,()=>{
    console.log(`server get started..`);
});
