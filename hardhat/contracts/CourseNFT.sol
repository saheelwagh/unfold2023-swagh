// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

abstract contract CourseNFT is ERC721, Ownable {
    using Strings for uint256;
    constructor() ERC721("CourseNFT", "CRSE") {
        _mint(msg.sender,1);
    }
    // Struct to store metadata for each NFT
    struct NFTMetadata {
        string courseName;
        address creator;
    }
    // Mapping to track token existence
    mapping(uint256 => bool) private _tokenExists;
    // Mapping from token ID to NFT metadata
    mapping(uint256 => NFTMetadata) private _nftMetadata;
    // Mint an NFT with associated course and creator
    function mintNFT(address to, uint256 tokenId, string memory courseName, address creator) external onlyOwner {
        require(!_tokenExists[tokenId], "Token ID already exists");
        _mint(to, tokenId);
        _nftMetadata[tokenId] = NFTMetadata(courseName, creator);
    }
    // Get the course name associated with an NFT
    function getCourseName(uint256 tokenId) external view returns (string memory) {
        return _nftMetadata[tokenId].courseName;
    }
    // Get the creator address associated with an NFT
    function getCreator(uint256 tokenId) external view returns (address) {
        return _nftMetadata[tokenId].creator;
    }
}