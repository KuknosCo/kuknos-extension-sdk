import { baseUrl, network, windowConfig } from "../config/config";
import {  IPaymentResponse, IIntentResponse, IntentResponseStatus } from "../interfaces/response.interface";

export function payment(amount: number , destination: string , asset_code: string, asset_issuer?: string):Promise<IPaymentResponse>{
    return new Promise((resolve , reject)=>{

        if(!asset_code || !amount || !destination){
            reject('Amount and destination and asset code should not be empty');
            return;
        }

        let confirmWin:any = window.open(
            `${baseUrl}/intent/payment?asset_code=${asset_code}&amount=${amount}&asset_issuer=${asset_issuer}&destination=${destination}&network=${network}`,
            "myWindow",
            `width=${windowConfig.width},height=${windowConfig.height},top=${windowConfig.top},left=${windowConfig.left},scrollbars=no`
        );
        const handleResponse = (response:IIntentResponse) => {            
            if (response.data.status === IntentResponseStatus.submit) {
                resolve({
                    ...response.data.data,
                    network: network
                })
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