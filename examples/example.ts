import { optionalNumber, optionalString } from '../';

const test = { foo: 'bar' };
optionalString(test, 'foo'); // Maybe<string> (OK)
optionalNumber(test, 'foo'); // Maybe<number> (THROWS)
