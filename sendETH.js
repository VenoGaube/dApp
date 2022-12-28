import {BigNumber, ethers} from "ethers";
import "dotenv/config";
import {getProvider, getSigner} from "./utils/utils.js";

// const mainnetProvider = getProvider(true);
const goerliProvider = getProvider();
const goerliSigner = getSigner();

const myBalance = await goerliSigner.getBalance();
const myAddress = await goerliProvider.resolveName(process.env.SECOND_WALLET_ADDRESS);
console.log("MY BALANCE: ", ethers.utils.formatEther(myBalance));

const tx = await goerliSigner.sendTransaction({
    to: myAddress,
    value: myBalance.div(BigNumber.from(10)),
});

console.log("tx sent! ", tx.hash);

await tx.wait();

console.log("tx minted. ");
