import * as KuknosSdk from "js-kuknos-sdk";
import { horizon } from "./../config/config";
import { accountSettingEntry, accountSettingResponse } from "../interfaces/accountSetting.interface";

export function getAccountSetting(publicKey: string): Promise<accountSettingResponse> {
	return new Promise(async (resolve, reject) => {
		if (!publicKey) {
			reject("publicKey should not be empty");
			return;
		}
		try {
			let account = await new KuknosSdk.Server(horizon.live)
				.accounts()
				.accountId(publicKey)
				.call()
				.then((result) => result);

			resolve({
				public: publicKey,
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
