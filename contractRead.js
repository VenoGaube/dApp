import {ethers} from "ethers";
import {getProvider} from "./utils/utils.js";

const myAddress = ""; // Contract Address
const myAbi = "";
const goerliProvider = getProvider();

new ethers.Contract(myAddress, abi, goerliProvider);
