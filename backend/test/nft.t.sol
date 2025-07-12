// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/Nft.sol";

contract NftTest is Test {
    Nft public nft;
    address owner = vm.addr(1);
    address user = vm.addr(2);
    string constant BASE_URI = "https://api.example.com/nfts/";

    function setUp() public {
        vm.startPrank(owner);
        nft = new Nft(BASE_URI);
        vm.stopPrank();
    }

    // Test constructor
    function test_InitialState() public {
        assertEq(nft.name(), "MyToken");
        assertEq(nft.symbol(), "MTK");
        assertEq(nft.totalSupply(), 0);
        assertTrue(nft.paused());
    }

    function test_Mint() public {
        vm.startPrank(owner);
        nft.unpause();
        
        uint256 initialSupply = nft.totalSupply();
        nft.mint(user);
        
        assertEq(nft.ownerOf(1), user);
        assertEq(nft.totalSupply(), initialSupply + 1);
        vm.stopPrank();
    }

    // Test pausing
    function test_PauseUnpause() public {
        vm.startPrank(owner);
        nft.unpause();
        assertFalse(nft.paused());
        
        nft.pause();
        assertTrue(nft.paused());
        vm.stopPrank();
    }

    