import { baseUrl, windowConfig } from "../config/config";
import {  IChangeTrustResponse, IIntentResponse, IntentResponseStatus } from "../interfaces/response.interface";

export function changeTrust(asset_code: string, type:'add'|'remove' ):Promise<IChangeTrustResponse>{
    return new Promise((resolve , reject)=>{

        if(!asset_code){
            reject('Asset code should not be empty');
            return;
        }

        let confirmWin:any = window.open(
            `${baseUrl}/intent/change-trust?asset_code=${asset_code}&type=${type}`,
            "myWindow",
            `width=${windowConfig.width},height=${windowConfig.height},top=${windowConfig.top},left=${windowConfig.left},scrollbars=no`
        );
        const handleResponse = (response:IIntentResponse) => {            
            if (response.data.status === IntentResponseStatus.submit) {
                resolve(response.data.data)
                window.removeEventListener("message", handleResponse);
                confirmWin.close();
            }
    
            if (response.data.status === IntentResponseStatus.reject) {
                window.removeEventListener("message", handleResponse);
                confirmWin.close();
                reject('Canceled by user')
            }
        };
        let timer = setInterval(function () {
            if (confirmWin.closed) {
                clearInterval(timer);
                window.removeEventListener("message", handleResponse);
            }
        }, 1000);
        window.addEventListener("message", handleResponse);
    })
    
}