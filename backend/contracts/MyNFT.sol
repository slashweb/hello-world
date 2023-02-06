// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT {

    // Basic struct of users
    struct User {
        string name;
        string category;
        string typeOfUser;
    }

    // Defines the list of users of the contract
    User[] users;

    constructor() {
    }

    function getUsers() public view returns (User[] memory) {
        return users;
    }

    function createNewUser(string memory _name, string memory _category) public {
        users.push(User({ name: _name, category: _category, typeOfUser: 'Student' }));
    }
}
