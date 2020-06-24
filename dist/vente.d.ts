/***
 * Returns a `Promise` that resolves after waiting requested time.
 * @param milliseconds Wait duration.
 * @returns {Promise<any>}
 */
export declare const wait: (milliseconds: number) => Promise<any>;
declare type IndefinitePromise = {
    promise: Promise<any>;
    resolve: () => void;
    reject: () => void;
};
/***
 * Returns a `Promise` that does not resolve/reject until either hook is manually called.
 * @returns {IndefinitePromise} A wrapped object with access to the Promise itself, and the resolver and rejecter functions.
 */
export declare const indefinite: () => IndefinitePromise;
export {};
