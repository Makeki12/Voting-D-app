// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    mapping(address => bool) public voters;
    mapping(string => uint256) public votes;
    string[] public candidates;

    constructor(string[] memory _candidates) {
        candidates = _candidates;
    }

    function vote(string memory candidate) public {
        require(!voters[msg.sender], "Already voted.");
        require(validCandidate(candidate), "Invalid candidate.");

        voters[msg.sender] = true;
        votes[candidate]++;
    }

    function validCandidate(string memory candidate) public view returns (bool) {
        for (uint256 i = 0; i < candidates.length; i++) {
            if (keccak256(bytes(candidates[i])) == keccak256(bytes(candidate))) {
                return true;
            }
        }
        return false;
    }
}
