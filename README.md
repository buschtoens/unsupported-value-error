# unsupported-value-error

[![CI](https://github.com/buschtoens/unsupported-value-error/workflows/CI/badge.svg)](https://github.com/buschtoens/unsupported-value-error/actions)
[![npm version](https://badge.fury.io/js/unsupported-value-error.svg)](http://badge.fury.io/js/unsupported-value-error)
[![Download Total](https://img.shields.io/npm/dt/unsupported-value-error.svg)](http://badge.fury.io/js/unsupported-value-error)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)  
[![Dependabot enabled](https://img.shields.io/badge/dependabot-enabled-blue.svg?logo=dependabot)](https://dependabot.com/)
[![dependencies Status](https://david-dm.org/buschtoens/unsupported-value-error/status.svg)](https://david-dm.org/buschtoens/unsupported-value-error)
[![devDependencies Status](https://david-dm.org/buschtoens/unsupported-value-error/dev-status.svg)](https://david-dm.org/buschtoens/unsupported-value-error?type=dev)

Little TypeScript utility Error class for performing exhaustiveness checks via
exceptions, based on [this post by Dr. Axel Rauschmayer][blog-post].

[blog-post]: https://2ality.com/2020/02/typescript-exhaustiveness-checks-via-exceptions.html

```ts
enum NoYes {
  No = 'no',
  Yes = 'yes'
}

function toGerman(x: NoYes) {
  switch (x) {
    case NoYes.No: return 'Nein';
    // case NoYes.Yes: return 'Ja';
    default: throw new UnsupportedValueError(x);
    // => TS2345: Static TS error: Argument of type 'NoYes.Yes' is not assignable to parameter of type 'never'.
    // => Runtime: Unsupported value: 'yes'
  }
}
```
