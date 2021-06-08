import { myLib } from 'kuknos-browser-intent-sdk';

export const demo = {
  compoundInterest(years: number, interest: number) {
    let result = 1;
    while (years-- > 0) {
      result = myLib.multiply(result, myLib.add(1, interest));
    }

    return result;
  },
};