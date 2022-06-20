// install and import express
const express = require("express");
const connectDB = require("./db");
const path=require("path");
let app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../../src/assets/users.html"));
});

app.get("/users",(req, res) => {
  res.sendFile(path.join(__dirname + "../../src/assets/user.json"));
});
// Code here
app.listen(8000, () => {
    console.log("8000")
})
// Note: Do not remove this export statement
module.exports = app;
