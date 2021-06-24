import { baseUrl, windowConfig , network } from "../config/config";
import { accountPublicKeyResponse } from "../interfaces/accountPublicKey.interface";
import {IIntentResponse, IntentResponseStatus } from "../interfaces/response.interface";

export function getAccountPublicKey():Promise<accountPublicKeyResponse>{
    return new Promise((resolve , reject)=>{
        let confirmWin:any = window.open(
            `${baseUrl}/intent/account-publickey?network=${network}`,
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