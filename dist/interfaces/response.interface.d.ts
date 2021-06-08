export interface IIntentResponse {
    data: {
        data: any;
        status: IntentResponseStatus;
        type: string;
    };
}
export declare enum IntentResponseStatus {
    submit = "submit",
    reject = "reject"
}
export interface IGetAccountPublicKey {
    publicKey: string;
}
