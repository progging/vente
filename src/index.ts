/***
 * Returns a `Promise` that resolves after waiting requested time.
 * @param milliseconds Wait duration.
 * @returns {Promise<void>}
 */
export const wait = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

type PendingPromise<T> = {
  /** The Promise itself. */
  promise: Promise<T>
  /** Function for resolving the Promise. */
  resolve: (value: T | PromiseLike<T>) => void
  /** Function for rejecting the Promise. */
  reject: (error: Error) => void
}

/***
 * Returns a `Promise` that does not resolve/reject until either hook is manually called.
 * @returns {PendingPromise} A wrapped object with access to the Promise itself, and the resolver and rejecter functions.
 */
export const pending = <T>(): PendingPromise<T> => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let resolve: (value: T | PromiseLike<T>) => void = () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    reject: (error: Error) => void = () => {}

  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })

  return {
    promise,
    resolve,
    reject,
  }
}
