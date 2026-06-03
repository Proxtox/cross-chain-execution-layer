// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Execution Core
contract ExecutionCore {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    function execute(bytes calldata data) external {
        require(msg.sender == admin, "Only admin");
        // Execution logic would go here
    }
}