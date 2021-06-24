export interface paymentEntry{
    amount: number,
    destination: string,
    memo?: string,
    asset_code: string,
    asset_issuer?: string
}

export interface paymentresponse{
    public: string;
    network: string;
	status: string;
	transaction_hash: string;
}