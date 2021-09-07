# string-incrementor

Avoid having to create random string ids, by having them incremented in the similar way of how numbers are.

# instalation

```bash
# Using npm
npm install string-incrementor

# Using Yarn
yarn add string-incrementor
```

# how to use it

```
import incrementString from 'string-incrementor';

const nextString = incrementString("AAA");
console.log(nextString);
//AAB
```
