import { Horizon } from "js-kuknos-sdk";

export interface IIntentResponse {
	data: {
		data: any;
		status: IntentResponseStatus;
		type: string;
	};
}

export enum IntentResponseStatus {
	submit = "submit",
	reject = "reject",
}

export interface IAccountPublicKeyResponse {
	public: string;
}

export interface IAccountBalancesResponse {
	public: string;
	balances: IBalance[];
}
export interface IBalance {
	asset_code: string;
	asset_type: string;
	available_balance: number;
	balance: number;
	buying_liabilities: string;
	selling_liabilities: string;
	limit: string;
}

export interface ICreateAccountResponse {
	public: string;
	signature: string;
}

export interface IChangeTrustResponse {
	public: string;
	status: string;
}

export interface IPaymentResponse {
	public: string;
	status: string;
	transaction_hash: string;
}

export interface ICurveEncryptResponse {
	ciphertext: string;
}

export interface ICurveDecryptResponse {
	public: string;
	data: string;
}

export interface ISignXdrResponse {
	public: string;
	xdr: string;
}

export interface ISignDataResponse {
	public: string;
	signature: string;
}

export interface IRecoverAccountResponse {
	public: string;
	signature: string;
}

export interface IAccountSettingResponse {
	public: string;
	setting: {
		thresholds: Horizon.AccountThresholds;
		flags: Horizon.Flags;
		inflation_destination: string | undefined;
		home_domain: string | undefined;
		signers: Horizon.AccountSigner[];
	};
}
