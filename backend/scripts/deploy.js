const private_key = network.config.accounts[0];
const wallet = new ethers.Wallet(private_key, ethers.provider)

const networkConfig = {
  3141: {
    name: "hyperspace",
    // tokensToBeMinted: 12000,
  },
}

const deploy = async () => {

  const [deployer] = await ethers.getSigners();
  console.log("Wallet Ethereum Address:", wallet.address)
  const chainId = network.config.chainId;
  console.log('test', chainId)
  const tokensToBeMinted = networkConfig[chainId]['tokensToBeMinted'];

  const MyNFT = await ethers.getContractFactory('MyNFT', wallet);
  console.log('Deploying MyNFT');
  const mynft = await MyNFT.deploy();
  await mynft.deployed()
  console.log('Deployed to: ', mynft.address);

  // console.log('Deploying contract with the account: ', deployer.address);
  // const MyNFT = await ethers.getContractFactory('MyNFT')
  // const deployed = await MyNFT.deploy();
  //
  // console.log('Contract has been deployed at: ', deployed.address)
}

deploy().then(() => process.exit(0)).catch(err => {
  console.log(err);
  process.exit(1);
})
