The code needs a ES2015+ polyfill to work, for example
[babel-polyfill](https://babeljs.io/docs/usage/polyfill).
```js
require( 'babel-polyfill' ) ;
// or
import 'babel-polyfill' ;
```

Then
```js
const heap = require( '@aureooms/js-heap' ) ;
// or
import heap from '@aureooms/js-heap' ;
```
