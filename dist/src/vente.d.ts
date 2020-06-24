/***
 * Returns a `Promise` that resolves after waiting requested time.
 * @param milliseconds Wait duration.
 * @returns {Promise<any>}
 */
export declare const wait: (milliseconds: number) => Promise<void>;
declare type PendingPromise = {
    /** The Promise itself. */
    promise: Promise<any>;
    /** Resolves the Promise. */
    resolve: () => void;
    /** Rejects the Promise. */
    reject: () => void;
};
/***
 * Returns a `Promise` that does not resolve/reject until either hook is manually called.
 * @returns {PendingPromise} A wrapped object with access to the Promise itself, and the resolver and rejecter functions.
 */
export declare const pending: () => PendingPromise;
export {};
