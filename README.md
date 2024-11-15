# Voting DApp

This is a decentralized application (DApp) for conducting a voting process on the Ethereum blockchain. Users can add candidates, view the list of candidates, and cast votes using their Ethereum addresses. The application interacts with a smart contract deployed on the blockchain.

## Features

- Add candidates to the voting list.
- Cast votes for registered candidates.
- Prevent duplicate voting.
- View current candidates and vote results (if implemented).

---

## Prerequisites

Before running the DApp, ensure you have the following installed:

1. [Node.js](https://nodejs.org/) (includes `npm`)
2. [Truffle Framework](https://trufflesuite.com/)
3. [Ganache](https://trufflesuite.com/ganache/) (local Ethereum blockchain for development)
4. [MetaMask](https://metamask.io/) (browser extension for interacting with the blockchain)
5. A code editor (e.g., [VS Code](https://code.visualstudio.com/))

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/voting-dapp.git
   cd voting-dapp
   ```

2. **Install Dependencies**
   Install required npm packages:
   ```bash
   npm install
   ```

3. **Start Ganache**
   - Open Ganache and create a new workspace.
   - Note the RPC server (e.g., `http://127.0.0.1:7545`) and use it to connect MetaMask.

4. **Compile and Deploy the Smart Contract**
   ```bash
   truffle compile
   truffle migrate --reset
   ```

5. **Connect MetaMask**
   - Add a custom RPC network in MetaMask (e.g., Ganache’s RPC server URL).
   - Import an account from Ganache using its private key.

6. **Run the Front-End Application**
   - If you are using `http-server`, start it in the directory containing your `index.html` file:
     ```bash
     http-server
     ```
   - Open the provided URL in your browser (e.g., `http://127.0.0.1:8080`).

---

## Usage

1. **Add a Candidate**:  
   - Enter the candidate’s name in the input field and click "Add Candidate."
   - Confirm the transaction in MetaMask.

2. **Cast a Vote**:  
   - Enter your Ethereum address and the candidate’s name.
   - Click the "Vote" button and confirm the transaction in MetaMask.

3. **View Candidates (Optional)**:  
   - If implemented, the candidate list and vote counts will be displayed dynamically.

---

## File Structure

```
voting-dapp/
├── contracts/
│   └── Voting.sol        # Smart contract for the voting system
├── migrations/
│   └── 2_deploy_voting.js  # Deployment script for the Voting contract
├── frontend/
│   ├── index.html        # Front-end UI
│   ├── app.js            # Front-end logic to interact with the smart contract
│   └── style.css         # (Optional) Styling for the application
├── test/
│   └── Voting.test.js    # Unit tests for the Voting contract
├── truffle-config.js     # Truffle configuration file
└── README.md             # Documentation file
```

---

## Testing

Run the automated tests to ensure the smart contract behaves as expected:

```bash
truffle test
```

---

## Troubleshooting

1. **White Screen**:  
   Ensure `index.html` is served correctly using a local server.

2. **Error Adding Candidates**:  
   - Confirm the contract is deployed.
   - Verify the `addCandidate` function is called correctly in `app.js`.

3. **MetaMask Connection Issues**:  
   Ensure MetaMask is connected to the correct network (e.g., Ganache).

4. **Revert Errors**:  
   - Ensure the candidate name is unique.
   - Check contract requirements (e.g., non-empty names).

---

## Technologies Used

- **Solidity**: For writing the smart contract.
- **Truffle**: For compiling, deploying, and testing the contract.
- **Ganache**: For a local blockchain during development.
- **Web3.js**: For interacting with the Ethereum blockchain from JavaScript.
- **HTML/CSS/JavaScript**: For the front-end.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or issues, feel free to reach out via email: [musyokiduncan1@gmail.com].

---

This `README.md` is structured for developers and end-users to understand the application setup, usage, and troubleshooting steps. Let me know if you'd like to customize it further!
