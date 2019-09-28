# VENTE

>`Promise`-based functions for waiting around.

## Install
`npm i -S vente` or `yarn add vente`

## Usage
```javascript
import {wait, indefinite} from "vente"

//...

await wait(1000)

//...

const deferred = indefinite()

deferred
    .resolve()
    .then(() => alert("resolved!"))

// Or

deferred
    .reject()
    .catch(() => alert("rejected!"))

```

