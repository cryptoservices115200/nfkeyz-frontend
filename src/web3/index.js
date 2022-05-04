import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

const NFKeysContractAbi = require("./abi/NFKeysContractAbi.json");
const SalesContractAbi = require("./abi/SalesContractAbi.json");

// testnet rinkbey
// const NFKeysContractAddress = "0x9bF9a87dA723d38529F485407da7C2EeD9950DAA";
// const SalesContractAddress = "0xFcF4A288d8A1fD736d62022808eBa923E66e4e2D";

const NFKeysContractAddress = "0xAcAf3E313aDA728d77FF0F81eaeBAce006e04529";
const SalesContractAddress = "0x223B710c14cB0c08bA5b50B45b45c73D67CE9d67";

const NFKeysContract = new web3.eth.Contract(
  NFKeysContractAbi,
  NFKeysContractAddress
);

const SalesContract = new web3.eth.Contract(
  SalesContractAbi,
  SalesContractAddress
);

const injected = new InjectedConnector({});

const connect = async (activate) => {
  try {
    await activate(injected);
  } catch (error) {
    console.log(error);
  }
};

const disconnect = async (deactivate) => {
  try {
    deactivate();
  } catch (error) {
    console.log(error);
  }
};

const humanReadableAccount = (_account) => {
  return _account.slice(0, 6) + "..." + _account.slice(_account.length - 4);
};

const mint = (address, quantity, fee) => {
  return SalesContract.methods.mint(address, quantity).send({
    from: address,
    value: quantity * fee,
  });
};

const whiteListMint = (proof, address, quantity, fee) => {
  return SalesContract.methods.whiteListMint(proof, address, quantity).send({
    from: address,
    value: quantity * fee,
  });
};

const getBalanceOf = (address) => {
  return NFKeysContract.methods.balanceOf(address).call();
};

const getTotalSupply = () => {
  return NFKeysContract.methods.totalSupply().call();
};

const getFeePerQuantity = () => {
  return SalesContract.methods.fee().call();
};

const getMintLimit = () => {
  return SalesContract.methods.mintLimit().call();
};

const changeMintLimit = (mintLimit, address) => {
  return SalesContract.methods
    .changeMintLimit(mintLimit)
    .send({ from: address });
};

const changeFee = (fee, address) => {
  return SalesContract.methods.changeFee(fee).send({ from: address });
};

const hasRoleAdmin = async (address) => {
  const _admin = await SalesContract.methods.ADMIN().call();
  return SalesContract.methods.hasRole(_admin, address).call();
};

const setMerkleRootWL = (root, address) => {
  return SalesContract.methods.setMerkleRootWL(root).send({ from: address });
};

export {
  connect,
  disconnect,
  humanReadableAccount,
  mint,
  getFeePerQuantity,
  getTotalSupply,
  getBalanceOf,
  getMintLimit,
  hasRoleAdmin,
  changeMintLimit,
  changeFee,
  setMerkleRootWL,
  whiteListMint,
};
