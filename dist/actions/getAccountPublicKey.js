import { baseUrl, windowConfig } from "../config/config";
import { IntentResponseStatus } from "../interfaces/response.interface";
export function getAccountPublicKey() {
    return new Promise(function (resolve, reject) {
        var confirmWin = window.open(baseUrl + "/confirm?type=getPublicKey", "myWindow", "width=" + windowConfig.width + ",height=" + windowConfig.height + ",top=" + windowConfig.top + ",left=" + windowConfig.left + ",scrollbars=no");
        var handleResponse = function (response) {
            if (response.data.status === IntentResponseStatus.submit) {
                resolve(response.data.data);
                window.removeEventListener("message", handleResponse);
                confirmWin.close();
            }
            if (response.data.status === IntentResponseStatus.reject) {
                window.removeEventListener("message", handleResponse);
                confirmWin.close();
                reject('Canceled by user');
            }
        };
        var timer = setInterval(function () {
            if (confirmWin.closed) {
                clearInterval(timer);
                window.removeEventListener("message", handleResponse);
            }
        }, 1000);
        window.addEventListener("message", handleResponse);
    });
}
//# sourceMappingURL=getAccountPublicKey.js.map