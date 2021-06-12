import * as kuknusSdk from 'js-kuknos-sdk';
import e2c from 'ed2curve'

import sodium_api from 'libsodium-wrappers';

export async function curveDecrypt(data:string, publicKey:string){
    let pub:any = publicKey
    await sodium_api.ready;
    data = JSON.stringify(data)
    var buf = Buffer.from(data)
    pub = kuknusSdk.StrKey.decodeEd25519PublicKey(pub)
    pub = e2c.convertPublicKey(pub)
    var secretData = sodium_api.crypto_box_seal(buf, pub)
    let base64String = btoa(secretData.reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
    }, ''));
    
    return base64String
}