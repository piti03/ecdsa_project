import {secp256k1} from '@noble/curves/secp256k1';
import{toHex} from 'ethereum-cryptography/utils';

const privateKey = secp256k1.utils.randomPrivateKey();
const publicKey = secp256k1.getPublicKey(privateKey);

function generateKey(){
    console.log("privateKey : ", toHex(privateKey));
    console.log("publickey : ",toHex(publicKey));
}
generateKey();

export default generateKey;
