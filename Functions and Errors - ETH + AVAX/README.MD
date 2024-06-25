# SimpleBank

This Solidity program is a simple banking contract that demonstrates basic functionality of the Solidity programming language. It allows users to deposit and withdraw Ether while keeping track of balances.

## Description

`SimpleBank` is a straightforward contract written in Solidity for the Ethereum blockchain. It features functions to deposit and withdraw funds, along with balance tracking for each user. This contract is perfect for those new to Solidity, serving as a great starting point for more complex projects.

## Getting Started

### Running the Program

To run this program, use Remix, an online Solidity IDE. Follow these steps:

1. **Visit Remix**: Go to [Remix](https://remix.ethereum.org/).
2. **Create a New File**: Click the "+" icon, name the file `SimpleBank.sol`.
3. **Copy the Code**: Create a Solidity file and paste the `SimpleBank` contract code into it.
4. **Compile the Code**:
   - Go to the "Solidity Compiler" tab.
   - Ensure the compiler version is set to 0.8.25.
   - Click "Compile SimpleBank.sol".
5. **Deploy the Contract**:
   - Go to the "Deploy & Run Transactions" tab.
   - Select `SimpleBank` from the dropdown.
   - Click "Deploy".
6. **Interact with the Contract**:
   - **Deposit Ether**: Enter an amount in the `VALUE` field and click `deposit`.
   - **Withdraw Ether**: Enter an amount in the `withdraw` field and click `withdraw`.
   - **Check Balance**: Click `getBalance`.

### Contract Functions

- **`deposit`**: Allows users to deposit Ether into the bank. The deposited amount is added to the user's balance.
- **`withdraw`**: Allows users to withdraw a specified amount of Ether from the bank, provided they have sufficient balance. If the withdrawal fails, the transaction is reverted.
- **`getBalance`**: Allows users to check their current Ether balance in the bank.

## Author

Metacrafter Chris  
[@ParijatGhosh](https://github.com/ParijatGhosh/Metacrafters)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
