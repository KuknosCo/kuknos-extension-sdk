import { baseUrl, windowConfig } from "../config/config";
import { IntentResponseStatus } from "../interfaces/response.interface";
export function changeTrust(asset_code, type) {
    return new Promise(function (resolve, reject) {
        if (!asset_code) {
            reject('Asset code must not be empty');
            return;
        }
        var confirmWin = window.open(baseUrl + "/intent/change-trust?asset_code=" + asset_code + "&type=" + type, "myWindow", "width=" + windowConfig.width + ",height=" + windowConfig.height + ",top=" + windowConfig.top + ",left=" + windowConfig.left + ",scrollbars=no");
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
//# sourceMappingURL=changeTrust.js.map