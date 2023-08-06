/*
const secp = require('ethereum-cryptography/secp256k1');
const{keccak256} = require('ethereum-cryptography/keccak');
const{utf8toBytes} = require('ethereum-cryptography/utils');
const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

function getAddress(publicKey){
    return keccak256(publicKey.slice(1)).slice(-20);
}

function hashMessage(message){
    const bytes = utf8toBytes(message);
    const msgHash = keccak256(bytes);
    return msgHash;
}

function siqnMessage(msg){
    const hashedMessage = hashMessage(msg);
    return secp.sign(hashMessage,PRIVATE_KEY,{recovered:true});
}


function recoverKey(_message, signature, recoverBit){
    const _msgHashed = hashMessage(_message);
    return secp.recoverPublicKey(_msgHashed, signature, recoverBit);
}



module.exports = siqnMessage;

*/