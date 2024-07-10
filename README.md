# Voting System Smart Contract and DApp

This project implements a decentralized voting system using Solidity smart contracts and a React-based frontend.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js and npm installed on your system
- MetaMask browser extension

### Installation and Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd voting-system
    ```

2. Install dependencies:
    ```bash
    npm i
    ```

3. Start a local Ethereum node:
    ```bash
    npx hardhat node
    ```

4. Deploy the smart contract:
    ```bash
    npx hardhat run --network localhost scripts/deploy.js
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:3000` to interact with the DApp.

### Using the DApp

1. Connect your MetaMask wallet to the local network (usually `http://localhost:8545`).
2. Use the interface to add candidates, cast votes, and view results.

## Features

- **Add Candidates**: Admin can add new candidates to the voting system.
- **Cast Votes**: Users can vote for their preferred candidate.
- **View Results**: Real-time display of vote counts for each candidate.
- **MetaMask Integration**: Secure interaction with the Ethereum blockchain.

## Smart Contract

The `VotingSystem.sol` contract includes the following main functions:

- `addCandidate`: Allows the admin to add new candidates.
- `vote`: Enables users to cast their vote for a candidate.
- `getVoteCount`: Returns the number of votes for a specific candidate.
- `getCandidates`: Returns the list of all candidates.
- `closeVoting`: Allows the admin to close the voting process.

## Frontend

The React-based frontend (`VotingPage.js`) provides an intuitive interface for interacting with the smart contract, including:

- Connecting to MetaMask
- Adding candidates (admin only)
- Casting votes
- Viewing real-time vote counts

## Note

This project is for educational purposes and not intended for production use without further security enhancements and optimizations.

## Author 
Parijat Ghosh
@ParijatGhosh

