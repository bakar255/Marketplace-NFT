// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract MarketplaceNft {
    struct Listing {
        address seller;
        uint256 price;
        uint256 timestamp;
    }

    mapping(address => mapping(uint256 => Listing)) public listings;

    event ItemListed(address indexed seller, address indexed nft, uint256 tokenId, uint256 price);
    event ItemSold(address indexed buyer, address indexed nft, uint256 tokenId, uint256 price);
    event ListingCancelled(address indexed seller, address indexed nft, uint256 tokenId);

    function listItem(address nft, uint256 tokenId, uint256 price) external {
        require(price > 0, "Price must be greater than zero");
        
        IERC721 token = IERC721(nft);
        require(token.ownerOf(tokenId) == msg.sender, "Not owner");
        require(token.getApproved(tokenId) == address(this), "Not aprove");

        listings[nft][tokenId] = Listing(msg.sender, price, block.timestamp);
        emit ItemListed(msg.sender, nft, tokenId, price);
    }

    function buyItem(address nft, uint256 tokenId) external payable {
        Listing memory item = listings[nft][tokenId];
        require(item.price > 0, "Item not listed");
        require(msg.value >= item.price, "Insufficient funds");

        (address royaltyReceiver, uint256 royaltyAmount) = getRoyaltyInfo(nft, tokenId, item.price);
        
        if (royaltyAmount > 0 && royaltyReceiver != address(0)) {
            payable(royaltyReceiver).transfer(royaltyAmount);
        }

        payable(item.seller).transfer(item.price - royaltyAmount);

        IERC721(nft).safeTransferFrom(item.seller, msg.sender, tokenId);

        delete listings[nft][tokenId];
        emit ItemSold(msg.sender, nft, tokenId, item.price);
    }

    function cancelListing(address nft, uint256 tokenId) external {
        Listing memory item = listings[nft][tokenId];
        require(item.seller == msg.sender, "Not seller");
        
        delete listings[nft][tokenId];
        emit ListingCancelled(msg.sender, nft, tokenId);
    }

    function getRoyaltyInfo(address nft, uint256 tokenId, uint256 salePrice) internal view returns (address, uint256) {
        try IERC2981(nft).royaltyInfo(tokenId, salePrice) returns (address receiver, uint256 amount) {
            return (receiver, amount);
        } catch {
            return (address(0), 0);
        }
    }
}