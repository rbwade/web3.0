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
  console.log('Contract is deployed by the Manager with address',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data:'0x' + bytecode})
  .send({gas:'2000000',from:accounts[0]})
  console.log('Contract deployed to address', result.options.address);
  // 0x7F801A10C681bE1155c17aCaaaaE018AA2f9a1BB
}
deploy();
