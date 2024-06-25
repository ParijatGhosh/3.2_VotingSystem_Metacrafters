// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

contract SimpleBank {
    mapping(address => uint256) private balances;

    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount, bool success);

    constructor() payable {
        if (msg.value > 0) {
            balances[msg.sender] += msg.value;
            emit Deposit(msg.sender, msg.value);
        }
    }

    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        uint256 oldBalance = balances[msg.sender];
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);

        
        assert(balances[msg.sender] == oldBalance + msg.value);
    }

    function withdraw(uint256 amount) public {
        require(amount > 0, "Withdraw amount must be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        uint256 oldBalance = balances[msg.sender];
        balances[msg.sender] -= amount;

        (bool success, ) = msg.sender.call{value: amount}("");
        if (!success) {
            balances[msg.sender] += amount;
            emit Withdrawal(msg.sender, amount, false);
            revert("Withdrawal failed");
        }
        emit Withdrawal(msg.sender, amount, true);
        assert(balances[msg.sender] == oldBalance - amount);
    }
    
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}
