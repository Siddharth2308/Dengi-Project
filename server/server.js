const express  = require("express");
const app = express();
const cors = require("cors");
const mysqlConnection = require("./database.js");
const Routes = require("./routes.js");

app.use(cors());
app.use(express.json());

app.use("/", Routes);

app.listen(5000, () =>{
    console.log("Server Has Started on Port 5000");
});