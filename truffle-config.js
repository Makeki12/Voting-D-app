/**
 * Use this file to configure your truffle project. It's loaded by the Truffle command
 * and includes setups for multiple networks. Specify each network and configure it
 * accordingly. For more info: https://trufflesuite.com/docs/truffle/reference/configuration
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  // Define networks where we can deploy the contracts
  networks: {
    // Local development network (Ganache)
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ganache port (default: none)
      network_id: "*",       // Match any network id
    },

    // Goerli Testnet (requires Infura/Alchemy and a mnemonic in .env file)
    goerli: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,               // Wallet mnemonic for signing transactions
        `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}` // Infura or Alchemy endpoint
      ),
      network_id: 5,                        // Goerli's network id
      gas: 5500000,                         // Gas limit
      confirmations: 2,                     // Confirmations for deployment
      timeoutBlocks: 200,                   // Timeout
      skipDryRun: true                      // Skip dry run before migrations
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",    // Specify Solidity compiler version
    }
  },

  // Truffle DB is currently disabled by default; enable it to use
  db: {
    enabled: false
  }
};
