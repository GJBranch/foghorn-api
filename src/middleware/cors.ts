import { injectable } from "inversify";

@injectable()
export class Cors implements Foghorn.Middleware.ICors {
    constructor() {

    }

    setHeaders(req, res, next): any {
        let origin = req.headers('origin');
        res.header('Access-Control-Allow-Origin', origin);
        
        next();
    }
}