const hre = require("hardhat");

async function getBalance(address) {
    const balanceBigInt = await hre.waffle.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

async function printBalances(addresses) {
    let idx = 0;
    for (const address of addresses) {
        console.log(`Address of ${idx} balance: `, await getBalance (address));
        idx++;
    }
}

async function printMemos(memos) {
    for (const memo of memos) {
        const timestamp = memo.timestamp;
        const tipper = memo.name;
        const tipperAddress = memo.from;
        const message = memo.message;
        console.log(`At ${timestamp}, ${tipper} (${tipperAddress}) said: "${message}"`)
    }
}

async function main () {
    // Get example accounts
    cont [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();

    // Get the contract to deploy
    const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
    const buyMeACoffee = await BuyMeACoffee.deploy();
    await buyMeACoffee.deployed();
    console.log("BuyMeACoffee deployed to ", buyMeACoffee.address);
    
    // Deploy contract
    const address = [owner.address, tipper.address, buyMeACoffee.address];
    console.log("== start ==");
    await printBalances(addresses);


    // Check balances before the coffee purchase

    // Buy the owner a few coffees

    // Check balances after coffee purchase

    // Withdraw funds

    // Check balance after withdrawal

    // Read all the memos left for owner
}

main ()
    .then (() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
