import {repeat} from './utils';

export const greet = (name: string, useExclamation: boolean = false, iterations: number = 1): void => {
  repeat(() => {
    console.log(`Hello ${name}${useExclamation ? '!' : ''}`)
  }, iterations);
}
