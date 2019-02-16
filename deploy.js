const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'island tool present best plunge enough endorse angry jaguar banner stand crucial',
  'https://rinkeby.infura.io/v3/44adc12318354f50a710b19d2113eb90'
);

const web3 = new Web3(provider);

const deploy = async() =>{
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
}
deploy();
