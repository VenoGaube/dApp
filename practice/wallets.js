import {BigNumber, ethers} from "ethers";
import 'dotenv/config';

// const wallet = ethers.Wallet.createRandom();
// console.log(wallet);
// console.log("address: ", wallet.address)
// console.log("private key: ", wallet.privateKey)
// console.log("mnemonic: ", wallet.mnemonic.phrase)
//
// let path, myWallet;
//
// for (let i = 0; i < 10; i++) {
//     path = `m/44'/60'/0'/0/${i}`;
//     myWallet = ethers.Wallet.fromMnemonic(wallet.mnemonic.phrase, path);
//     console.log("address", i, myWallet.address);
//     console.log("private key", i, myWallet.privateKey);
// }

// const provider = new ethers.providers.InfuraProvider("homestead", process.env.INFURA_KEY);
const infuraUrl = `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
await provider.detectNetwork();
// const wallet = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
// console.log("Wallet addres: ", await signer.getAddress());

// Signer - Local cryptography
// Provider - Connection
const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
await signer.connect(provider);
const myBalance = await provider.getBalance(signer.address);


console.log("Goerli balance", myBalance);


const tx = await provider.sendTransaction(await signer.signTransaction({
   to: "0x49fb7c37726f6e24130ab3a48867d8e714c11eb1",
   value: myBalance.div(BigNumber.from(10)),
}));

console.log("Transaction in the mem. pool", tx);
await tx.wait();
console.log("Transaction confirmed.");
// const signature = await wallet.signMessage("Hello!");
// console.log("Signed message", signature);
//
// // console.log("Is signer?", wallet._isSigner);
// const signerAddress = ethers.utils.verifyMessage("Hello!", signature);
// console.log("signerAddress", signerAddress);
