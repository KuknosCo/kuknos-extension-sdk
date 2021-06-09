import { baseUrl, windowConfig } from "../config/config";
import { ICreateAccountResponse, IIntentResponse, IntentResponseStatus } from "../interfaces/response.interface";

export function createAccount(identifier:string):Promise<ICreateAccountResponse>{
    return new Promise((resolve , reject)=>{
        if(!identifier){
            reject('Identifier must not be empty')
            return
        }
        let confirmWin:any = window.open(
            `${baseUrl}/intent/create-account?identifier=${identifier}`,
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