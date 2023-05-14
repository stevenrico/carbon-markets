const { ethers } = require("hardhat");

console.log("creating a new account");
const wallet = ethers.Wallet.createRandom();
console.log(wallet.address);
console.log(wallet.privateKey);
