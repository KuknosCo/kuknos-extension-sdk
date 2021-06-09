import { IChangeTrustResponse } from "../interfaces/response.interface";
export declare function changeTrust(asset_code: string, type: 'add' | 'remove'): Promise<IChangeTrustResponse>;
