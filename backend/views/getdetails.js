const express = require("express");
const cors = require("cors");
const { verifytoken } = require("./jwt");

const getrouter = express.Router();

getrouter.use(express.json());
getrouter.use(cors());

getrouter.post("/", async (req, res) => {
  console.log("This is the data that we received from the frontend");
  console.log(req.body);

  let { _jwt } = req.body;

  if (_jwt == undefined) {
    res.status(404).json({
      error: "The user needs to login to access the profile",
    });
  } else {
    console.log("This is the jwt token", _jwt);
    let result = await verifytoken(_jwt);
    console.log(result);

    res.json({
      status: "Ok",
    });
  }
});

module.exports = getrouter;
