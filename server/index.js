//const express = require("express");
import express from "express";
import cors from 'cors';
//const cors = require("cors");
const app = express();
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "03245318ab1a79a1e25fee3388cc05d517787f4e213ebd3c949564a443c330718b": 100,
  "037ae25a6203d635df5f9a969d85873a5a0d6b8bc0fb11515a41d72240cc6d7e5d": 50,
  "0266f84af2274b1a63975aadd118758ce5b26245e3cffe4158de57cea6039b5843": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  // Here you must compelete your project.
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

export default setInitialBalance;
