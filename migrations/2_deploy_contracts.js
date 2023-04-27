var Auction = artifacts.require('ARTCollectible');
module.exports = function(deployer) {
  deployer.deploy(Auction);
};