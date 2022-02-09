import {repeat} from './utils';

type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  followUp: (punctuation: string) => string;
  address?: Address;
}

export const greet = (name: Person, useExclamation: boolean = false, iterations: number = 1): void => {
  const punctuation = useExclamation ? '!' : '';
  repeat(() => {
    console.log(`Hello ${name.firstName} ${name.lastName}${punctuation}`)
    console.log(name.followUp(punctuation))
  }, iterations);
}
