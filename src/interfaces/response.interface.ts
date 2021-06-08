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

export interface IAccountPublicKey{
    public: string
}

export interface IAccountBalances{
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

export interface ICreateAccount{
    public: string
    signature: string
}