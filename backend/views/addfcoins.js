const express=require("express");
const cors=require("cors");


const fcoinrouter=express.Router();

fcoinrouter.use(cors());
fcoinrouter.use(express.json());

