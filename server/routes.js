const express = require("express");
const Router = express.Router();
const mysqlConnection = require("./database.js");

Router.get("/", async(req, res) =>{
    const services = mysqlConnection.query("SELECT * FROM products", (err, rows, fields) => {
        if(!err) res.send(rows);
        else console.log(err);
    });
});

Router.get("/products/:id", async(req, res) =>{
    const {id} = req.params;
    const services = mysqlConnection.query("SELECT * FROM products WHERE id = ?",[id], (err, rows, fields) => {
        if(!err) res.send(rows);
        else console.log(err);
    });
});

Router.get("/users/:email/:password", async(req, res) =>{
    const {email} = req.params;
    const {password} = req.params;
    const services = mysqlConnection.query("SELECT * FROM users WHERE email = ? AND paravli = ?", [email, password], (err, rows, fields) => {
        if(!err){
            if(rows.length !== 0){
                res.send(rows);
            } else res.send("69");
        } 
        else console.log(err);

        console.log(email, password);

    });
});

Router.get("/cart/:id", async(req, res) =>{
    const {id} = req.params;
    var product_list = [{}];
    const services = mysqlConnection.query("select * from cart join users on cart.u_id = users.u_id join products on cart.p_id = products.id;",[id], (err, rows, fields) => {
        if(!err){
            res.send(rows);
        } else console.log(err);
    });
});

Router.get("/cart/:id", async(req, res) =>{
    const {id} = req.params;
    const services = mysqlConnection.query("SELECT * FROM cart WHERE u_id = ?",[id], (err, rows, fields) => {
        if(!err) res.send(rows);
        else console.log(err);
    });
});

Router.post("/products/add", async(req, res) =>{
    const {...data} = req.body;
    const services = mysqlConnection.query("INSERT INTO products ( product_name, details, Sstatus, price, photu) VALUES (?)",
    [Object.values(data)],
     (err) => {
        if(!err) res.json("Data Added Successfully");
        else console.log(err);
    });
});

Router.post("/users/add", async(req, res) =>{
    const {...data} = req.body;
    const services = mysqlConnection.query("INSERT INTO users ( email, paravli ) VALUES (?)",
    [Object.values(data)],
     (err) => {
        if(!err){
            mysqlConnection.query("SELECT * FROM users WHERE email = ? AND paravli = ?", [data.email, data.paravli], (err, rows, fields) => {
                if(!err) res.send(rows);
                else console.log(err);
            });
        }
        else console.log(err);
    });
});

Router.post("/cart/add", async(req, res) =>{
    const {...data} = req.body;
    console.log(data);
    const services = mysqlConnection.query("INSERT INTO cart ( u_id, p_id, quantity ) VALUES (?)",
    [Object.values(data)],
     (err) => {
        if(!err) res.json("Data Added Successfully");
        else console.log(err);
        console.log("Cart Updated");
    });
});

Router.put("/products/update/:id", async(req, res) =>{
    const {id} = req.params;
    const {...data} = req.body;
    const services = mysqlConnection.query("UPDATE products SET product_name = ? , details = ? , Sstatus = ?, price = ?, photu = ? WHERE id = ?",
    [data.product_name, data.details, data.Sstatus, data.price, data.photu, id],
     (err) => {
        if(!err) res.json("Data Updated Successfully");
        else console.log(err);
    });
});

Router.delete("/products/:id", async(req, res) =>{
    const {id} = req.params;
    const services = mysqlConnection.query("DELETE FROM products WHERE id = ?", [id] , (err) => {
        if(!err) res.json("Entry Deleted");
        else console.log(err);
    });
});

Router.delete("/cart/empty/:id", async(req, res) =>{
    const {id} = req.params;
    const services = mysqlConnection.query("DELETE FROM cart WHERE u_id = ?", [id] , (err) => {
        if(!err) res.json("Entry Deleted");
        else console.log(err);
    });
});

Router.delete("/cart/:id/:p_id", async(req, res) =>{
    const {id} = req.params;
    const {p_id} = req.params;
    const services = mysqlConnection.query("DELETE FROM cart WHERE u_id = ? AND p_id = ?", [parseInt(id), parseInt(p_id)] , (err) => {
        if(!err) res.json("Entry Deleted");
        else console.log(err);
    });
});

module.exports = Router;