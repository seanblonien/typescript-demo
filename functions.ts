import {repeat} from './utils';

type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
}

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

export const greet = (name: Person, useExclamation: boolean = false, iterations: number = 1): void => {
  if (name.address === undefined) {
    console.error('Address is undefined');
    return;
  }
  repeat(() => {
    console.log(`Hello ${name.firstName} ${name.lastName}${useExclamation ? '!' : ''}`)
  }, iterations);
}
