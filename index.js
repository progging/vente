/***
 * Returns a `Promise` that resolves after requested time.
 * @param milliseconds Wait duration.
 * @returns {Promise}
 */
export const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds))

/***
 * Returns a `Promise` that does not resolve/reject until either hook is manually called.
 * @returns {Promise}
 */
export const indefinite = () => {
    let resolve, reject

    const promise = new Promise((res, rej) => {
        resolve = res
        reject = rej
    })

    return {
        promise,
        resolve,
        reject
    }
}