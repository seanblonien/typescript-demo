import {greet} from './functions';

type MyString = string;

type MyOtherString = string;

const a: MyString | undefined = 'foo';
const b: MyOtherString = 'bar';

greet(a);
greet(b, true, 2);
