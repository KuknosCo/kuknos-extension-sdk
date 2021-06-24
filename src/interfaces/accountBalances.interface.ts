export interface accountBlancesResponse{
    public: string;
	balances: balance[];
}


export interface balance {
	asset_code: string;
	asset_type: string;
	available_balance: number;
	balance: number;
	buying_liabilities: string;
	selling_liabilities: string;
	limit: string;
}