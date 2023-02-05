const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contract with the account: ', deployer.address);
  const MyNFT = await ethers.getContractFactory('MyNFT')
  const deployed = await MyNFT.deploy();

  console.log('Contract has been deployed at: ', deployed.address)
}

deploy().then(() => process.exit(0) ).catch(err => {
  console.log(err);
  process.exit(1);
})
