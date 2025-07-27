// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";

contract Nft is ERC721Pausable, Ownable {
    
    uint256 public constant MAX_SUPPLY = 100000;
    uint256 public mintPrice = 0.1 ether;
    uint256 public totalSupply;
    string private _baseTokenURI;

    event Mint(address indexed to, uint256 indexed tokenId);

    constructor(string memory baseURI) ERC721("MyToken", "MTK") Ownable(msg.sender) {
        _baseTokenURI = baseURI;
        _pause(); // Start paused for safety
    }

    /// @notice Mint a new NFT to the given address
    function mint(address to) external payable whenNotPaused {
        require(msg.value >= mintPrice, "Insufficient ETH");
        require(totalSupply < MAX_SUPPLY, "Max supply reached");
        require(to != address(0), "Cannot mint to zero address");
        
        totalSupply++;
        _safeMint(to, totalSupply);
        emit Mint(to, totalSupply);
    }

    /// @notice Retirer les fonds du contrat
    function withdraw() external onlyOwner {
        (bool success, ) = payable(owner()).call{value: address(this).balance}("");
        require(success, "Transfer failed");
    }

    /// @notice Override baseURI
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    /// @notice Unpause contract
    function unpause() external onlyOwner {
        _unpause();
    }

    /// @notice Pause contract
    function pause() external onlyOwner {
        _pause();
    }

    /// @notice Change base URI
    function setBaseURI(string calldata baseURI) external onlyOwner {
        require(bytes(baseURI).length > 0, "Invalid base URI");
        _baseTokenURI = baseURI;
    }

    /// @notice Update mint price (onlyOwner)
    function setMintPrice(uint256 newPrice) external onlyOwner {
        mintPrice = newPrice;
    }
}