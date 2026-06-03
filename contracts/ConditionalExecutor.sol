// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Conditional Executor
contract ConditionalExecutor {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    function executeIf(bytes calldata data, bool condition) external {
        require(msg.sender == admin, "Only admin");
        if (condition) {
            // Execution logic would go here
        }
    }
}