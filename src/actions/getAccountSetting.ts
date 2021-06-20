import { IAccountSettingResponse } from "../interfaces/response.interface";
import * as KuknosSdk from "js-kuknos-sdk";
import { horizon, network } from "./../config/config";

export function getAccountSetting(
	publicKey: string
): Promise<IAccountSettingResponse> {
	return new Promise(async (resolve, reject) => {
		if (!publicKey) {
			reject("publicKey should not be empty");
			return;
		}
		try {
			let account = await new KuknosSdk.Server(horizon)
				.accounts()
				.accountId(publicKey)
				.call()
				.then((result) => result);

			resolve({
				public: publicKey,
				network: network,
				setting: {
					thresholds: account.thresholds,
					flags: account.flags,
					inflation_destination: account.inflation_destination,
					home_domain: account.home_domain,
					signers: account.signers,
				},
			});
		} catch (error) {
			reject(error);
		}
	});
}
