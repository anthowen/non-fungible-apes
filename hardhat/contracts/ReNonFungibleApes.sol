// SPDX-License-Identifier: ISC

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ReNonFungibleApes is ERC721Enumerable, ReentrancyGuard, Ownable {

    string[] private faceColors = [
        "Pale Pink",
        "Blood Orange",
        "Burnt Orang",
        "Green Grey",
        "ApeSwap Brown",
        "Smoke Grey",
        "Brown"
    ];
    
    string[] private baseColors = [
        "Orangutan",
        "Dark Grey",
        "Maroon",
        "Army Green",
        "Zombie Purple",
        "Hazel"
    ];
    
    string[] private frames = [
        "Main Frame",
        "Earings"
    ];
    
    string[] private mouths = [
        "Open",
        "Happy",
        "Stale",
        "Buck Teeth",
        "Gold Tooth",
        "Sad",
        "Happy",
        "Open"
    ];
    
    string[] private eyes = [
        "Pearl",
        "Normal",
        "Pink Sunglasses",
        "Happy",
        "Shades",
        "Closed",
        "VR Goggles",
        "Red Sunglasses",
        "Sans",
        "Sans Red",
        "Lazer"
    ];
    
    string[] private hats = [
        "Third eye",
        "Astronaut",
        "Brown Hair",
        "Sweat Band",
        "Banana Hair",
        "Cop",
        "Dark Cowboy",
        "Pale Cowboy",
        "Visor",
        "Red Tassle",
        "Avatar"        
    ];

    constructor() ERC721("Regenerated Non-fungible Apes", "RNFA") Ownable() {}
    
    function random(string memory input) internal pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(input)));
    }
    
    function getFaceColor(uint256 tokenId) public view returns (string memory) {
        return pluck(tokenId, "FACE_COLOR", faceColors);
    }
    
    function getBaseColor(uint256 tokenId) public view returns (string memory) {
        return pluck(tokenId, "BASE_COLOR", baseColors);
    }
    
    function getFrame(uint256 tokenId) public view returns (string memory) {
        return pluck(tokenId, "FRAME", frames);
    }
    
    function getMouth(uint256 tokenId) public view returns (string memory) {
        return pluck(tokenId, "MOUTH", mouths);
    }

    function getEye(uint256 tokenId) public view returns (string memory) {
        return pluck(tokenId, "EYE", eyes);
    }
    
    function getHat(uint256 tokenId) public view returns (string memory) {
        return pluck(tokenId, "HAT", hats);
    }
    
    function pluck(uint256 tokenId, string memory keyPrefix, string[] memory sourceArray) internal pure returns (string memory) {
        uint256 rand = random(string(abi.encodePacked(keyPrefix, toString(tokenId))));
        string memory output = sourceArray[rand % sourceArray.length];
        return output;
    }

    function tokenURI(uint256 tokenId) override public view returns (string memory) {
        string[19] memory parts;
        parts[0] = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><style>.base { fill: black; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="white" /><text x="10" y="20" class="base">';

        parts[1] = getFaceColor(tokenId);

        parts[2] = '</text><text x="10" y="40" class="base">';

        parts[3] = getBaseColor(tokenId);

        parts[4] = '</text><text x="10" y="60" class="base">';

        parts[5] = getFrame(tokenId);

        parts[6] = '</text><text x="10" y="80" class="base">';

        parts[7] = getMouth(tokenId);

        parts[8] = '</text><text x="10" y="100" class="base">';

        parts[9] = getEye(tokenId);

        parts[10] = '</text><text x="10" y="120" class="base">';

        parts[11] = getHat(tokenId);

        parts[12] = '</text></svg>';

        string memory output = string(abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6], parts[7], parts[8]));
        output = string(abi.encodePacked(output, parts[9], parts[10], parts[11], parts[12]));
        
        string memory json = Base64.encode(bytes(string(abi.encodePacked('{"name": "ReNFA #', toString(tokenId), '", "description": "Regenerated Non-fungible Apes (https://apeswap.finance/nft). Attributes are stored on-chain in the svg format.", "image": "data:image/svg+xml;base64,', Base64.encode(bytes(output)), '"}'))));
        output = string(abi.encodePacked('data:application/json;base64,', json));

        return output;
    }

    function claim(uint256 tokenId) public nonReentrant {
        require(tokenId > 0 && tokenId < 7778, "Token ID invalid");
        _safeMint(_msgSender(), tokenId);
    }
    
    function ownerClaim(uint256 tokenId) public nonReentrant onlyOwner {
        require(tokenId > 7777 && tokenId < 8001, "Token ID invalid");
        _safeMint(owner(), tokenId);
    }
    
    function toString(uint256 value) internal pure returns (string memory) {
    // Inspired by OraclizeAPI's implementation - MIT license
    // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}

/// [MIT License]
/// @title Base64
/// @notice Provides a function for encoding some bytes in base64
/// @author Brecht Devos <brecht@loopring.org>
library Base64 {
    bytes internal constant TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /// @notice Encodes some bytes to the base64 representation
    function encode(bytes memory data) internal pure returns (string memory) {
        uint256 len = data.length;
        if (len == 0) return "";

        // multiply by 4/3 rounded up
        uint256 encodedLen = 4 * ((len + 2) / 3);

        // Add some extra buffer at the end
        bytes memory result = new bytes(encodedLen + 32);

        bytes memory table = TABLE;

        assembly {
            let tablePtr := add(table, 1)
            let resultPtr := add(result, 32)

            for {
                let i := 0
            } lt(i, len) {

            } {
                i := add(i, 3)
                let input := and(mload(add(data, i)), 0xffffff)

                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(input, 0x3F))), 0xFF))
                out := shl(224, out)

                mstore(resultPtr, out)

                resultPtr := add(resultPtr, 4)
            }

            switch mod(len, 3)
            case 1 {
                mstore(sub(resultPtr, 2), shl(240, 0x3d3d))
            }
            case 2 {
                mstore(sub(resultPtr, 1), shl(248, 0x3d))
            }

            mstore(result, encodedLen)
        }

        return string(result);
    }
}
