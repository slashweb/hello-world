// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Course {


    // Basic struct of users
    struct sCourse {
        string name;
        string category;
        string description;
        bool exists;
    }

    // Defines the list of users of the contract
    mapping(address => sCourse[]) courses;

    address[] coursesAddresses;

    constructor() {
    }


    function getAllCourses() public view returns (sCourse[] memory) {
        sCourse[] memory allCourses = new sCourse[](coursesAddresses.length);

        for(uint i = 0; i < coursesAddresses.length; i++) {
            address index = coursesAddresses[i];
            for (uint c = 0; c < courses[index].length; c++) {
                allCourses[i] = courses[ index ][ c ];
            }
        }

        return allCourses;
    }


    function getCoursesByAuthor(address addr) public view returns (sCourse[] memory) {

        return courses[addr];
    }


    function createNewCourse(
        string memory _name,
        string memory _category,
        string memory _description
    ) public {
        if (!courses[msg.sender][0].exists) {
            // Saving the keys of the users to iterate
            coursesAddresses.push(msg.sender);
        }

        courses[msg.sender].push(sCourse({
        name: _name,
        category: _category,
        description: _description,
        exists: true
        }));

    }
}
