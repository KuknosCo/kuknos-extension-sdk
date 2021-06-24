
export interface changeTrustEntry{
    type: 'add'|'remove',
    asset_code: string,
    asset_issuer?: string,
    limit?: number
}

export interface changeTrustResponse {
    public: string;
	status: string;
}