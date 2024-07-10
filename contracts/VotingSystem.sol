// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VotingSystem {
    address public admin;
    mapping(address => bool) public hasVoted;
    mapping(string => uint256) public voteCount;
    string[] public candidates;
    uint256 public totalVotes;

    event Vote(address voter, string candidate);
    event CandidateAdded(string candidate);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function addCandidate(string memory _candidate) public onlyAdmin {
        require(bytes(_candidate).length > 0, "Candidate name cannot be empty");
        candidates.push(_candidate);
        emit CandidateAdded(_candidate);
    }

    function vote(string memory _candidate) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(isCandidateValid(_candidate), "Invalid candidate");

        hasVoted[msg.sender] = true;
        voteCount[_candidate]++;
        totalVotes++;

        emit Vote(msg.sender, _candidate);
    }

    function isCandidateValid(string memory _candidate) private view returns (bool) {
        for (uint i = 0; i < candidates.length; i++) {
            if (keccak256(bytes(candidates[i])) == keccak256(bytes(_candidate))) {
                return true;
            }
        }
        return false;
    }

    function getVoteCount(string memory _candidate) public view returns (uint256) {
        require(isCandidateValid(_candidate), "Invalid candidate");
        return voteCount[_candidate];
    }

    function getCandidates() public view returns (string[] memory) {
        return candidates;
    }

    
    error VotingClosed();

bool public votingClosed;

function closeVoting() public onlyAdmin {
    if (totalVotes > 0) {
        revert VotingClosed();
    }
    votingClosed = true;
}

}
