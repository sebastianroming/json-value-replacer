# json-value-replacer

> replaces all values in a JSON object, no matter how deep.

## Install
```
npm install --save json-value-replacer
```


## Usage
```js
const jsonValueReplacer = require('json-value-replacer');

const obj = { 'a': 'value a', 'b': 'value b', 'c': { 'd': 'value c', 'e': { 'f': 'value f' } } };

console.log(jsonValueReplacer(obj, "#####"));
// -> { a: '#####', b: '#####', c: { d: '#####', e: { f: '#####' } } }
```

## License

MIT © [Sebastian Roming](https://webmonkey.io)