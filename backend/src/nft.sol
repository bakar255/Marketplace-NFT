// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";

contract MyToken is ERC721Pausable, Ownable(msg.sender) {

    uint256 public constant MAX_SUPPLY = 100000;
    uint256 public mintPrice = 0.1 ether;

    uint256 private _tokenIdTracker = 0;
    string private _baseTokenURI;

    event Mint(address indexed to, uint256 indexed tokenId);

    constructor(string memory baseURI) ERC721("MyToken", "MTK") {
        _baseTokenURI = baseURI;
        _pause(); // Start paused for safety
    }

    /// @notice Mint a new NFT to the given address
    function mint(address to) external onlyOwner whenNotPaused {
        require(_tokenIdTracker < MAX_SUPPLY, "Max supply reached");
        _tokenIdTracker++;
        uint256 newTokenId = _tokenIdTracker;
        _safeMint(to, newTokenId);
        emit Mint(to, newTokenId);
    }

    /// @notice Total NFTs minted
    function totalSupply() external view returns (uint256) {
        return _tokenIdTracker;
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
        _baseTokenURI = baseURI;
    }
}
