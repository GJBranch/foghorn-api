declare namespace Foghorn {
    export namespace Middleware {
        /**
         * 
         * 
         * @export interface ICache
         */
        export interface ICache {
            setHeaders(req, res, next): void;
        }

        /**
         * 
         * 
         * @export interface ICancel
         */
        export interface ICancel {
            watch(req, res, next): void;
        }

        /**
         * 
         * 
         * @export interface ICors
         */
        export interface ICors {
            setHeaders(req, res, next): any;
        }
    }
}