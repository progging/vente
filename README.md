# VENTE

> `Promise`-based functions for waiting around.

## Install

`npm i -S vente` or `yarn add vente`

## Usage

```javascript
import { wait, pending } from 'vente'

//...

await wait(1000)

//...

const pendingPromise = pending()

pendingPromise.resolve().then(() => alert('resolved!'))

// Or

pendingPromise.reject().catch(() => alert('rejected!'))
```

## Test

`npm i && npm t`
