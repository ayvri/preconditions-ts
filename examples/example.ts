import { optionalNumberFrom, optionalStringFrom } from '../';

const test = { foo: 'bar' };
optionalStringFrom(test, 'foo'); // Maybe<string> (OK)
optionalNumberFrom(test, 'foo'); // Maybe<number> (THROWS)
