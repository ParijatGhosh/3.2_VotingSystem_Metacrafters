# MyToken Smart Contract

## Overview
This Solidity program is a smart contract for a custom ERC-20-like token called "MyToken". The purpose of this program is to demonstrate the basic functionalities of token creation, minting, and burning using the Solidity programming language. This serves as a starting point for those new to Solidity and blockchain development.

## Description
This program is a smart contract written in Solidity, used for creating and managing a custom token on the Ethereum blockchain. The contract includes functionalities to mint new tokens, burn existing tokens, and keep track of balances for different addresses. The contract ensures that tokens can only be burned if the sender has a sufficient balance.

## Getting Started

### Executing the Program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at [Remix](https://remix.ethereum.org/).

1. Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a `.sol` extension (e.g., `MyToken.sol`). Copy and paste the following code into the file:

    ```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity 0.8.25;

    /*
        REQUIREMENTS
        1. Your contract will have public variables that store the details about your coin (Token Name, Token Abbrv., Total Supply)
        2. Your contract will have a mapping of addresses to balances (address => uint)
        3. You will have a mint function that takes two parameters: an address and a value. 
           The function then increases the total supply by that number and increases the balance 
           of the “sender” address by that amount
        4. Your contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. 
           It will take an address and value just like the mint functions. It will then deduct the value from the total supply 
           and from the balance of the “sender”.
        5. Lastly, your burn function should have conditionals to make sure the balance of "sender" is greater than or equal 
           to the amount that is supposed to be burned.
    */

    contract MyToken {
        // public variables here
        string public tokenName = "Ethereum";
        string public tokenAbbrv = "Eth";
        uint public totalSupply = 0;

        // mapping variable here
        mapping(address => uint) public balances;

        // mint function
        function mint(address _address, uint _value) public {
            totalSupply += _value;
            balances[_address] += _value;
        }

        // burn function
        function burn(address _address, uint _value) public {
            if(balances[_address] >= _value) {
                totalSupply -= _value;
                balances[_address] -= _value;
            }
        }
    }
    ```

2. To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.25" (or another compatible version), and then click on the "Compile MyToken.sol" button.

3. Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "MyToken" contract from the dropdown menu, and then click on the "Deploy" button.

4. Once the contract is deployed, you can interact with it by calling various functions such as `mint` and `burn`. For example, to mint new tokens, click on the "MyToken" contract in the left-hand sidebar, select the `mint` function, enter the recipient address and the amount, and then click on the "transact" button to execute the function.

## Authors
Parijat Ghosh
[@ParjiatGhosh]

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
