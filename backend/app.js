const express = require("express");
const app = new express();
const loginrouter = require("./views/login");
const { signup } = require("./views/signup");
const getdetails = require("./views/getdetails");
const cors = require("cors");

app.use(cors());

app.use("/api/login", loginrouter);
app.use("/api/signup", signup);
app.use("/getdetails", getdetails);

module.exports = app;
