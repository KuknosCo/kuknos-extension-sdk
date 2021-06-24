import * as kuknusSdk from "js-kuknos-sdk";
import e2c from "ed2curve";
import sodium_api from "libsodium-wrappers";
import { curveEncryptEntry, curveEncryptResponse } from "../interfaces/curveEncrypt.interface";

export async function curveEncrypt(data: curveEncryptEntry):Promise<curveEncryptResponse> {
	return new Promise(async (resolve, reject) => {
		let publicKey = data.publicKey;
		let plainText = data.data
		try {
			let pub: any = publicKey;
			await sodium_api.ready;
			plainText = JSON.stringify(plainText);
			var buf = Buffer.from(plainText);
			pub = kuknusSdk.StrKey.decodeEd25519PublicKey(pub);
			pub = e2c.convertPublicKey(pub);
			var secretData = sodium_api.crypto_box_seal(buf, pub);
			let base64String = btoa(
				secretData.reduce(function (plainText, byte) {
					return plainText + String.fromCharCode(byte);
				}, "")
			);

			resolve({
				ciphertext: base64String
			});
		} catch (error) {
			reject(error);
		}
	});
}
