import { describe, test } from '@jest/globals'
import { pending, wait } from '../src'

describe('wait', () => {
  test('wait should wait, then resolve', async () => {
    await expect(wait(1)).toResolve()
  })
})

describe('pending', () => {
  test('pending promise should resolve when hook is called', async () => {
    const { promise, resolve } = pending<void>()
    resolve()
    expect(promise).toResolve()
  })

  test('pending promise should resolve with a value', async () => {
    const { promise, resolve } = pending<{ a: string; b: string }>()
    const value = { a: 'prop 1', b: 'prop 2' }

    resolve(value)
    const result = await promise

    expect(promise).toResolve()
    expect(result).toMatchObject(value)
  })

  test('pending promise should reject with an Error', async () => {
    const { promise, reject } = pending<never>()

    try {
      reject(new Error('Oops!'))
      await promise
    } catch (error) {
      expect((error as Error).message).toBe('Oops!')
    }

    expect(promise).toReject()
  })
})
