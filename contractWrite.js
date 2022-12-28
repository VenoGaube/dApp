import {ethers} from "ethers";
import {getProvider, getSigner} from "./utils/utils.js";
import sanfordNFTABI from "./abi/sanfordNFTABI.js";

const sanfordNFTAddress = "0x6E2756D5A4780c4d26De0A91f0c0AF5CE77cBC34";
const rinkebySigner = getSigner();
const rinkebyProvider = getProvider(true);

const sanfordContract = new ethers.Contract(
    sanfordNFTAddress,
    sanfordNFTABI,
    rinkebySigner
);

// const mintPrice = await sanfordContract.TOTAL_SUPPLY();

const mintTx = await sanfordContract.mint();
console.log(mintTx.hash);
