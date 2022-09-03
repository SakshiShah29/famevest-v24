import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import elonbanner from "./images/elonbanner.png";
import elonmusk from "./images/elonmusk.png";
import graph from "./images/graph.png";
import arrow from "./images/aestheticarrow.png";
import linegraph from "./images/linegraph.png";
import sevenday from "./images/sevenday.png";
import identicon from "./images/identicon.png";
import Login_signup from "./components/LoginSignup/loginsignup";
import Transferethers from "./contracts/Transferethers.json";
import Web3 from "web3";
// import main from "../uniswap_f5-main/uniswapTrader";
import Home from './components/Home';
import Docs from './components/Docs';
import Features from './components/Features';
import Trend from './components/Trend';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Myprofile from './components/Myprofile';
import Wallet from './components/Wallet';



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/docs" element={<Docs />} />
      <Route exact path="/features" element={<Features />} />
      <Route exact path="/trends" element={<Trend />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/myprofile" element={<Myprofile />} />
      <Route exact path="/wallet" element={<Wallet />} />
      <Route exact path="/signup" element={<Login_signup />} />
    </Routes>
  );
}

export default App;
