import {ethers} from "ethers";
import 'dotenv/config';

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;

// PROVIDERS
const provider = new ethers.providers.JsonRpcBatchProvider(infuraUrl);
// const infuraProvider = new ethers.providers.InfuraProvider("rinkeby", process.env.INFURA_KEY);

// console.log("Current block num.: ", await provider.getBlockNumber());
// console.log("arg.eth is: ", await provider.resolveName("atg.eth"));
// console.log("ENS is: ", await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3"));

// HELP TO GO FROM AND INTO BIGNUMBER
// const addressBalance = await provider.getBalance("0x34aA3F359A9D614239015126635CE7732c18fDF3");
// console.log("Balance: ", ethers.utils.formatEther(addressBalance));
// console.log("1.5ETH is ", ethers.utils.parseEther("1.5").toString(), "wei");

const vitalikBalance = await provider.getBalance("vitalik.eth");
let sanfordBalance = await provider.getBalance("sanfordstout.eth");

sanfordBalance = sanfordBalance.add(ethers.utils.parseEther("5000"));

console.log("sanford balance: ", ethers.utils.formatEther(sanfordBalance));

if (vitalikBalance.gt(sanfordBalance)) {
    console.log("vitalik > sanford");
} else {
    console.log("sanford > vitalik");
}
