# random-hexhash

> Return a random hex hash.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-hexhash/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-hexhash/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-hexhash)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-hexhash/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-hexhash)


## Install

```
$ npm install --save random-hexhash 

## Usage

```js
var randomHash = require('random-hexhash');

// API
// - randomHash([options]);

// options
// - length
// - casing
```

By default, the hash is lowercase and 40 hex characters long (same as a git commit hash).

```js
randomHash();     
// => 'e5162f27da96ed8e1ae51def1ba643b91d2581d8' 
```

Optionally specify a length:

```js
randomHash({length: 15});     
// => 'c28f57cb599ada4' 
```

Optionally specify casing to get a hash with only uppercase letters rather than the default lowercase:


```js
randomHash({casing: 'upper'});     
// => '3F2EB3FB85D88984C1EC4F46A3DBE740B5E0E56E' 
```


## Related


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-hexhash/issues/new).
