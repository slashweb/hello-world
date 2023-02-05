require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { ACCOUNT_KEY, URL_NETWORK } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerly: {
      url: URL_NETWORK,
      accounts: [ACCOUNT_KEY]
    }
  }
};
