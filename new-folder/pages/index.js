import { useState, useEffect } from "react";
import { ethers } from "ethers";
import votingSystemABI from "../artifacts/contracts/VotingSystem.sol/VotingSystem.json";

export default function VotingPage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [votingSystem, setVotingSystem] = useState(undefined);
  const [candidates, setCandidates] = useState([]);
  const [newCandidate, setNewCandidate] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const contractABI = votingSystemABI.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
    }
  }

  const connectAccount = async () => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    getVotingSystemContract();
  };


  const getVotingSystemContract = async () => {
    if (typeof window.ethereum !== 'undefined') {
      let provider, signer;
      if (ethers.providers && ethers.providers.Web3Provider) {
        
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
      } else {
       
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
      }
      const votingSystemContract = new ethers.Contract(contractAddress, votingSystemABI.abi, signer);
      setVotingSystem(votingSystemContract);
    }
  }
  

  const getCandidates = async () => {
    if (votingSystem) {
      const candidateList = await votingSystem.getCandidates();
      setCandidates(candidateList);
    }
  }

  const addCandidate = async () => {
    if (votingSystem && newCandidate) {
      let tx = await votingSystem.addCandidate(newCandidate);
      await tx.wait();
      getCandidates();
      setNewCandidate("");
    }
  }

  const vote = async () => {
    if (votingSystem && selectedCandidate) {
      let tx = await votingSystem.vote(selectedCandidate);
      await tx.wait();
      alert("Vote cast successfully!");
    }
  }

  const getVoteCount = async (candidate) => {
    if (votingSystem) {
      const count = await votingSystem.getVoteCount(candidate);
      return count.toNumber();
    }
    return 0;
  }

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this voting system.</p>
    }

    if (!account) {
      return <button onClick={connectAccount}>Connect your MetaMask wallet</button>
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <h2>Add Candidate</h2>
        <input 
          type="text" 
          value={newCandidate} 
          onChange={(e) => setNewCandidate(e.target.value)}
          placeholder="Enter candidate name"
        />
        <button onClick={addCandidate}>Add Candidate</button>

        <h2>Vote</h2>
        <select 
          value={selectedCandidate} 
          onChange={(e) => setSelectedCandidate(e.target.value)}
        >
          <option value="">Select a candidate</option>
          {candidates.map((candidate, index) => (
            <option key={index} value={candidate}>{candidate}</option>
          ))}
        </select>
        <button onClick={vote}>Vote</button>

        <h2>Candidates and Votes</h2>
        <ul>
          {candidates.map((candidate, index) => (
            <li key={index}>
              {candidate}: <VoteCount candidate={candidate} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const VoteCount = ({ candidate }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const fetchCount = async () => {
        const voteCount = await getVoteCount(candidate);
        setCount(voteCount);
      };
      fetchCount();
    }, [candidate]);

    return <span>{count} votes</span>;
  }

  useEffect(() => {
    getWallet();
  }, []);

  useEffect(() => {
    if (votingSystem) {
      getCandidates();
    }
  }, [votingSystem]);

  return (
    <main className="container">
      <header><h1>Welcome to the Voting System!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}
