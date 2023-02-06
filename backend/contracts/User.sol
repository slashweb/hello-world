// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract User {


    // Basic struct of users
    struct sUser {
        string name;
        string category;
        string typeOfUser;
        bool exists;
    }

    // Defines the list of users of the contract
    mapping(address => sUser) users;

    address[] userAddress;

    constructor() {
    }


    function getAllUsers() public view returns (sUser[] memory) {
        sUser[] memory allUsers = new sUser[](userAddress.length);

        for(uint i = 0; i < userAddress.length; i++) {
            address index = userAddress[i];
            allUsers[i] = users[ index ];
        }

        return allUsers;
    }

    function getUserByAddress(address addr) public view returns (sUser memory) {
        return users[addr];
    }

    function getMyUserData() public view returns (sUser memory) {
        return users[msg.sender];
    }

    function createNewUser(string memory _name, string memory _category) public {
        // Test if user has been added previously
        if (!users[msg.sender].exists) {
            // Saving the keys of the users to iterate
            userAddress.push(msg.sender);
        }

        // Creating a mapping for the user or editting in case
        users[msg.sender] = sUser({
        name: _name,
        category: _category,
        typeOfUser: "Student",
        exists: true
        });

    }
}
