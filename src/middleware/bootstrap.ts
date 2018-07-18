import 'reflect-metadata';
import { interfaces, ContainerModule, Container } from 'inversify';
import { Cache } from './cache';
import { Cancel } from './cancel';
import { Cors } from './cors';

let MiddlewareContainerModule = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<Foghorn.Middleware.ICache>('Cache').to(Cache);
    bind<Foghorn.Middleware.ICancel>('Cancel').to(Cancel);
    bind<Foghorn.Middleware.ICors>('Cors').to(Cors);
});

let MiddlewareContainer = new Container();
MiddlewareContainer.bind<Foghorn.Middleware.ICors>('Cors').to(Cors);

export {
    MiddlewareContainer,
    MiddlewareContainerModule
};