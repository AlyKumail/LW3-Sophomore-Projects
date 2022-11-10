//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistAddresses;

    mapping(address => bool) public whitelistedAddresses;

    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxWhitelistAddresses) {
        maxWhitelistAddresses = _maxWhitelistAddresses;
    }

    function addAddressToWhitelist() public {
        require(
            !whitelistedAddresses[msg.sender],
            "Sender has already een whitelisted!"
        );

        require(
            numAddressesWhitelisted < maxWhitelistAddresses,
            "More addresses can be added, limit reached!"
        );

        whitelistedAddresses[msg.sender] = true;

        numAddressesWhitelisted += 1;
    }
}
