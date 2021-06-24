
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





