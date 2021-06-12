export interface IIntentResponse{
    data : {
        data : any
        status : IntentResponseStatus
        type : string
    }
}

export enum IntentResponseStatus{
    submit = "submit",
    reject = "reject"
}

export interface IAccountPublicKeyResponse{
    public: string
}

export interface IAccountBalancesResponse{
    public: string
    balances : IBalance[]
}
export interface IBalance{
    asset_code: string
    asset_type: string
    available_balance: number
    balance: number
    buying_liabilities: string
    selling_liabilities: string
    limit: string
}

export interface ICreateAccountResponse{
    public: string
    signature: string
}

export interface IChangeTrustResponse{
    public: string
    signature: string
}

export interface ICurveEncryptResponse{
    ciphertext : string
}

export interface ICurveDecryptResponse{
    public: string
    data: string
}

export interface ISignXdrResponse{
    public: string
    xdr: string
}

