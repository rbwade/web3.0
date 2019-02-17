import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined'&& typeof window.web3 !== 'undefined'){
  //we are in the browser and  web3 is running
  web3 = new Web3(window.web3.currentProvider);
}else{
  const provider =new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/44adc12318354f50a710b19d2113eb90'
  );
  web3 = new Web3(provider);
}

export default web3;
