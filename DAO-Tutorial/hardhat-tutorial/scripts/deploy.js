const { ethers } = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
    const FakeNFTMarketplace = await ethers.getContractFactory(
        "FakeNFTMarketplace"
    );
    const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
    await fakeNftMarketplace.deployed();

    console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

    const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
    const cryptoDevsDao = await CryptoDevsDAO.deploy(
        fakeNftMarketplace.address,
        CRYPTODEVS_NFT_CONTRACT_ADDRESS,
        {
            value: ethers.utils.parseEther("0.1"),
        }
    );

    await cryptoDevsDao.deployed();

    console.log("CryptoDevsDAO deployed to: ", cryptoDevsDao.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
