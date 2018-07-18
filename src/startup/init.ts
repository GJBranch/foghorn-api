import { injectable } from 'inversify';

@injectable() 
export class Init {
    constructor() {

    }

    async init() {
        try {
            //TODO: add Arango setup here
        } catch (ex) {
            throw ex;
        }
    }
}