/***
 * Returns a `Promise` that resolves after waiting requested time.
 * @param milliseconds Wait duration.
 * @returns {Promise<any>}
 */
export const wait = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

type PendingPromise = {
  /** The Promise itself. */
  promise: Promise<any>
  /** Resolves the Promise. */
  resolve: () => void
  /** Rejects the Promise. */
  reject: () => void
}

/***
 * Returns a `Promise` that does not resolve/reject until either hook is manually called.
 * @returns {PendingPromise} A wrapped object with access to the Promise itself, and the resolver and rejecter functions.
 */
export const pending = (): PendingPromise => {
  let resolve: () => void = () => {},
    reject: () => void = () => {}

  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })

  return {
    promise,
    resolve,
    reject,
  }
}
