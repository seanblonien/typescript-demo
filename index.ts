import {greet} from './functions';

type MyString = string;

type MyOtherString = string;

const a: MyString = 'foo';
const b: MyOtherString = 'bar';

greet(a, false, 1);
greet(b, true, 2);
