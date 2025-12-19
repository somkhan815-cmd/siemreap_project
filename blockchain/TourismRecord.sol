// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TourismRecord {

    struct Record {
        string userId;
        string placeId;
        uint256 timestamp;
    }

    Record[] public records;

    function addRecord(string memory _userId, string memory _placeId) public {
        records.push(Record(_userId, _placeId, block.timestamp));
    }

    function getRecordsCount() public view returns (uint256) {
        return records.length;
    }
}
