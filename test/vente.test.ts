import { pending } from '../src/vente'
import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

describe('Vente', () => {
  it('rejected pending promise should be rejected', function () {
    const pendingPromise = pending()
    pendingPromise.reject()
    expect(pendingPromise.promise).to.be.rejected
  })

  it('resolved pending promise should be fulfilled', function () {
    const pendingPromise = pending()
    pendingPromise.resolve()
    expect(pendingPromise.promise).to.be.fulfilled
  })
})
