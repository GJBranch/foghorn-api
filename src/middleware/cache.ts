import { injectable } from "inversify";

@injectable()
export class Cache implements Foghorn.Middleware.ICache {
    constructor() {

    }

    public setHeaders(req, res, next): void {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        next();
    }
}