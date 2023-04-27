const assert = require("assert");
const {BN, expectEvent, expectRevert} = require("@openzeppelin/test-helpers");
const { web3 } = require("@openzeppelin/test-helpers/src/setup");
const NFTCollectible = artifacts.require("NFTCollectible");

contract("NFTCollectible", (accounts) => {
    before(async function(){
        this.nftcollectible = await NFTCollectible.new();
    });

    it("check owner", async function(){
        console.log(accounts[0]);
        assert.equal(await this.nftcollectible.owner(), accounts[0]);
    });

    it("mint from web without enough eth", async function(){
        try{
            await this.nftcollectible.mintToken(1, {from: accounts[1], value: new BN(0)});
            assert.false;
        }
        catch (err){
           
            assert.equal("not enough ETH was sent", err.reason);
        }
    })

    it("mint more than one tokens", async function(){
        try{
            await this.nftcollectible.mintToken(4, {from: accounts[1], value: web3.utils.toWei("0.2", "ether")})
        }
        catch(err){
            assert.equal("you've reached MAX AMOUNT", err.reason);
        }
    })

    it("mint one token from web without err", async function(){
        await this.nftcollectible.mintToken(1, {from: accounts[1], value: web3.utils.toWei("0.15", "ether")});
        assert.equal(await this.nftcollectible.balanceOf(accounts[1]),1);
    })

    it("mint one token from web without err", async function(){
        await this.nftcollectible.mintToken(1, {from: accounts[2], value: web3.utils.toWei("0.15", "ether")});
        assert.equal(await this.nftcollectible.balanceOf(accounts[2]),1);
    })

    it("get eth from contract > wrong woner", async function(){
        try{
            await this.nftcollectible.withdraw(accounts[1], {from: accounts[3]});
            assert.false;
        }
        catch(err){
            assert.equal("Ownable: caller is not the owner", err.reason);
        }
    })
    it("get eth from contract was owner", async function() {
        var balanceBefore = await web3.eth.getBalance(accounts[0]);
        await this.nftcollectible.withdraw(accounts[0], {from: accounts[0]});
        var balanceAfter = await web3.eth.getBalance(accounts[0]);
        assert.ok(balanceAfter > balanceBefore);
    })
});

