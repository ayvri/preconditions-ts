# preconditions-ts

A WIP preconditions library for TypeScript.

[![NPM](https://nodei.co/npm/preconditions-ts.png)](https://nodei.co/npm/preconditions-ts/)

[![unstable](https://img.shields.io/badge/stability-unstable-yellowgreen.svg)](https://github.com/dominictarr/stability#unstable) [![Build Status](https://api.travis-ci.org/DamonOehlman/preconditions-ts.svg?branch=master)](https://travis-ci.org/DamonOehlman/preconditions-ts)

## Examples

```ts
import { optionalNumber, optionalString } from 'preconditions-ts';

const test = { foo: 'bar' };
optionalString(test, 'foo'); // Maybe<string> (OK)
optionalNumber(test, 'foo'); // Maybe<number> (THROWS)
```

## LICENSE

ISC License

Copyright (c) 2018, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
