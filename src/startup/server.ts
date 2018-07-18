import * as Express from 'express';
import { json, urlencoded } from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { FoghornContainer } from '../ioc/container';

export class Server {
    private server: Express.Application = Express();
    private cache = FoghornContainer.get<Foghorn.Middleware.ICache>('Cache');
    private cancel = FoghornContainer.get<Foghorn.Middleware.ICancel>('Cancel');
    private cors = FoghornContainer.get<Foghorn.Middleware.ICors>('Cors');
    constructor() {
        this.server.use(this.cache.setHeaders);
        this.server.use(this.cancel.watch);
        this.server.use(this.cors.setHeaders);
        this.server.use(json());
        this.server.use(urlencoded({ extended: true }));

        let router = Express.Router({
            caseSensitive: false,
            mergeParams: false,
            strict: false
        });

        let server = new InversifyExpressServer(FoghornContainer, router, { rootPath: '/api' }, this.server);
        this.server = server.build();
        this.server.listen(8001, () => {
            console.log(`Server started at port 8001`);
        });
    }
}