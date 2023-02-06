require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { ACCOUNT_KEY, URL_NETWORK } = process.env

module.exports = {
  solidity: "0.8.17",
  networks: {
    hyperspace: {
      chainId: 3141,
      url: URL_NETWORK,
      accounts: [ACCOUNT_KEY]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
