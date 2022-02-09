import {repeat} from './utils';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
}

export const greet = (name: Person, useExclamation: boolean = false, iterations: number = 1): void => {
  repeat(() => {
    console.log(`Hello ${name.firstName} ${name.lastName}${useExclamation ? '!' : ''}`)
  }, iterations);
}
