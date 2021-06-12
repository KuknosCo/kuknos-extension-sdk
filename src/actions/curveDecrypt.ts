import { baseUrl, windowConfig } from "../config/config";
import {ICurveDecryptResponse, IIntentResponse, IntentResponseStatus } from "../interfaces/response.interface";


export async function curveDecrypt(ciphertext: string):Promise<ICurveDecryptResponse> {
	return new Promise((resolve , reject)=>{
        if(!ciphertext){
            reject('data should not be empty')
            return
        }
        let confirmWin:any = window.open(
            `${baseUrl}/intent/curve-decrypt?ciphertext=${encodeURIComponent(ciphertext)}`,
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
