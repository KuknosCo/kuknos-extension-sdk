import { IWindowConfig } from "../interfaces/windowConfig.interface";

//export const baseUrl: string = "https://browser-extension.kuknos.ir";
export const baseUrl: string = "http://localhost:3001";
export const kuknos: string = "http://localhost:3001";

export const horizon  = {
  live : 'https://horizon.kuknos.org',
  test : 'https://hz1-test.kuknos.org'
}
export const windowConfig: IWindowConfig = {
  width: 416,
  height: 600,
  top: 150,
  left: window.screen.width - 460,
};
