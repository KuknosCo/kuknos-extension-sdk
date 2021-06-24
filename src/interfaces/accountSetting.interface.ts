import { Horizon } from "js-kuknos-sdk";

export interface accountSettingEntry{
    publicKey: string
}


export interface accountSettingResponse {
	public: string;
	setting: {
		thresholds: Horizon.AccountThresholds;
		flags: Horizon.Flags;
		inflation_destination: string | undefined;
		home_domain: string | undefined;
		signers: Horizon.AccountSigner[];
	};
}