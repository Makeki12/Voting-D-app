const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
    // List of candidates to be passed into the contract constructor
    const candidates = ["Alice", "Bob", "Charlie"];

    deployer.deploy(Voting, candidates);
};
