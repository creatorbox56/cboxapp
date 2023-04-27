// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract ARTCollectible is Ownable, ERC721 {
using Counters for Counters.Counter;
Counters.Counter private _tokenIDs;
using Strings for uint256;
mapping(uint256 => string) private _tokenURIs;
uint public totalSupply=0;
uint constant public MAX_AMOUNT=500;
uint constant public MAX_TOKEN_ACCOUNT=100;
uint constant public LISTING_PRICE = 0.01 ether;
string private _baseURIextended;

constructor() ERC721("artgateCollectible", "ARTG"){
    }

    function mintfromWeb(uint tokenQuantity, string memory _tokenURI) external payable{
        require(totalSupply + tokenQuantity <= MAX_AMOUNT, "project sold out");
        require(LISTING_PRICE*tokenQuantity <= msg.value, "not enough ETH was sent");
        require(balanceOf(msg.sender) +  tokenQuantity <= MAX_TOKEN_ACCOUNT, "you've reached MAX AMOUNT");

           claimItem(_tokenURI);
           totalSupply++;
    
    }

    function setBaseURI(string memory baseURI_) external onlyOwner{
        _baseURIextended = baseURI_;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI)
        internal
        virtual
        {
            require(
                _exists(tokenId),
                "ERC721Metadata: URI set of nonexistent token");
            _tokenURIs[tokenId] = _tokenURI;
        }

    function _baseURI() internal view virtual override returns (string memory){
        return _baseURIextended;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory)
    {

    require(
        _exists(tokenId), 
        "ERC721Metadata: URI set of nonexistent token"
    );

    string memory _tokenURI = _tokenURIs[tokenId];
    string memory base = _baseURI();

    //no baseURI needed
    if(bytes(base).length == 0){
        return _tokenURI;
    }
    
    return string(abi.encodePacked(base, tokenId.toString()));

    }
    
    function claimItem(string memory tokenURI1) private returns (uint256){
         _tokenIDs.increment();
         uint256 newItemId =  _tokenIDs.current();
         _safeMint(msg.sender, newItemId);
         _setTokenURI(newItemId, tokenURI1);
       
       return newItemId;
     
     }

    function withdraw(address treasury) external payable onlyOwner{
        require(payable(treasury).send(address(this).balance));
    }
}
