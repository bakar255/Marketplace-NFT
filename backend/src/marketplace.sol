//SDPX Licence Identifier: MIT

pragma solidity ^0.8.0;

interface E721 {
    function safeTransferFrom(address from, address to, uint256 tokenID) external;
    function getApproved(uint256 tokenID) external; 
}

contract MarketplaceNft{

    struct listing {
        address seller;
        uint256 price;
        uint256 timestamp;
    }
}

/*  Struct listing must retain in memory the price and seller */

mapping(address => mapping(uint256 => Listing)) public listings;

/* Address => (tokenID => Listings) */


function listItem(address nft, uint256 token, uint256 price) external {

    require(price > 0, "Value must be greater than zero");
    IERC721 token = IERC721(nft);

    require(token.getApproved(tokenID) == address(this), "Not approved");
    listings[nft][token] = Listing(msg.sender, price, block.timestamp);
}


function buyItem(address nft, uint256 tokenID) external payable {

    Listing memory item = listings[nft][tokenId];
    require(item.price > 0);
    require(msg.value >= item.price, "");

    delete listing[nft][token];
    payable(item.seller).transfer(item.price);

    IERC721(nft).safeTransferFrom(item.seller, msg.sender, tokenID);
 }


 function cancelListing(address nft, uint256 tokenID) external {
    Listing memory item = listings[nft][tokenID];
    require(item.seller == msg.sender, "Not seller");

 }