const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi = [ /* Paste the ABI from your compiled contract */ ];

let contract;
window.onload = async () => {
    if (window.ethereum) {
        await ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(abi, contractAddress);
        loadCandidates();
    } else {
        alert("Please install MetaMask!");
    }
};

async function loadCandidates() {
    const candidates = await contract.methods.candidates().call();
    let html = "";
    candidates.forEach(candidate => {
        html += `<p>${candidate}</p>`;
    });
    document.getElementById("candidates").innerHTML = html;
}

document.getElementById("voteButton").onclick = async () => {
    const candidate = document.getElementById("candidate").value;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    await contract.methods.vote(candidate).send({ from: accounts[0] });
    alert("Vote submitted!");
};
