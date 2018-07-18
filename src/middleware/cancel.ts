import { injectable } from "inversify";

@injectable()
export class Cancel implements Foghorn.Middleware.ICancel {
    constructor() {

    }

    watch(req, res, next): void {
        req.on('aborted', () => {
            res.end();
        })
        next();
    }
}