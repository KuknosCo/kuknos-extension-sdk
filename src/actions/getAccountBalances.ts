import { baseUrl, windowConfig } from "../config/config";
import {
	IAccountBalancesResponse,
	IIntentResponse,
	IntentResponseStatus,
} from "../interfaces/response.interface";
import * as KuknosSdk from "js-kuknos-sdk";
import { horizon } from "./../config/config";

export function getAccountBalances(
	publicKey?: string
): Promise<IAccountBalancesResponse> {
	return new Promise(async (resolve, reject) => {
		if (publicKey) {
			try {
				let account = await new KuknosSdk.Server(horizon.live)
					.accounts()
					.accountId(publicKey)
					.call()
					.then((result) => result);

				let balances = account.balances.map((item: any) => {
					let availableBalance = 0;
					if (item.asset_type === "native") {
						availableBalance = calculateAvailablePMN(account);
					} else {
						availableBalance =
							parseFloat(item.balance) - parseFloat(item.selling_liabilities);
					}
					return {
						asset_type: item.asset_type,
						asset_code: item.asset_type === "native" ? "PMN" : item.asset_code,
						balance: parseFloat(item.balance),
						available_balance: availableBalance,
						buying_liabilities: item.buying_liabilities,
						selling_liabilities: item.selling_liabilities,
						limit: item.limit ? item.limit : "unlimited",
					};
				});

                resolve({
                    public: publicKey,
                    balances : balances
                })
			} catch (error) {
				reject(error);
			}
		} else {
			let confirmWin: any = window.open(
				`${baseUrl}/intent/account-balance`,
				"myWindow",
				`width=${windowConfig.width},height=${windowConfig.height},top=${windowConfig.top},left=${windowConfig.left},scrollbars=no`
			);
			const handleResponse = (response: IIntentResponse) => {
				if (response.data.status === IntentResponseStatus.submit) {
					resolve(response.data.data);

					window.removeEventListener("message", handleResponse);
					confirmWin.close();
				}

				if (response.data.status === IntentResponseStatus.reject) {
					window.removeEventListener("message", handleResponse);
					confirmWin.close();
					reject("Canceled by user");
				}
			};
			let timer = setInterval(function () {
				if (confirmWin.closed) {
					clearInterval(timer);
					window.removeEventListener("message", handleResponse);
				}
			}, 1000);
			window.addEventListener("message", handleResponse);
		}
	});
}

function calculateAvailablePMN({ balances, subentry_count }) {
	try {
		let reserve = 1;
		reserve += subentry_count * 0.5;

		// reserve += (balances.length -1 ) * 0.5
		// reserve += (signers.length -1 ) * 0.5
		// reserve += (Object.keys(data).length) * 0.5
		// reserve += parseFloat(balances.filter(e=>e.asset_type === 'native')[0].buying_liabilities)
		reserve += parseFloat(
			balances.filter((e) => e.asset_type === "native")[0].selling_liabilities
		);

		return (
			parseFloat(balances.filter((e) => e.asset_type === "native")[0].balance) -
			reserve
		);
	} catch (error) {
		return 0;
	}
}
