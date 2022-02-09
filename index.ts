import {greet} from './functions';

const a = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  followUp: (punctuation: string) => {
    return `I am a scientist${punctuation}`;
  },
  job: 'scientist',
  isMarried: true
}

greet(a, true);
