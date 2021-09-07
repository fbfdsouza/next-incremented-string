# next-incremented-string

Avoid having to create random string ids, by having them incremented in the similar way of how numbers are.

# instalation

```bash
# Using npm
npm install next-incremented-string

# Using Yarn
yarn add next-incremented-string
```

# how to use it

```
import { incrementString } from 'next-incremented-string';

const nextString = incrementString("AAA");
console.log(nextString);
//AAB
```
