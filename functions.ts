import {repeat} from './utils';

export const greet = (name: string, useExclamation: boolean, iterations: number): void => {
  repeat(() => {
    console.log(`Hello ${name}${useExclamation ? '!' : ''}`)
  }, iterations);
}
