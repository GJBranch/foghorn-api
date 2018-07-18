import 'reflect-metadata';

import { Container } from "inversify";
import { interfaces, TYPE } from 'inversify-express-utils';
import { Init } from '../startup/init'; 

import { MiddlewareContainerModule } from '../middleware/bootstrap';
let FoghornContainer = new Container();

FoghornContainer.bind<any>('Init').to(Init);
FoghornContainer.load(MiddlewareContainerModule);

export { FoghornContainer };