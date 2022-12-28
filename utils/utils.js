import {ethers} from "ethers";
import "dotenv/config"

const getProvider = (mainnet = false) => {
    const providerUrl = mainnet ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}` : `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;

    return new ethers.providers.JsonRpcProvider(providerUrl);
};

const generateNewWallet = () => {
  const wallet = ethers.Wallet.createRandom();
};

const getSigner = (mainnet = false) => {
    const provider = getProvider(mainnet);

    return new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider);
}

//es6 module syntax
export {getProvider, getSigner, generateNewWallet};
